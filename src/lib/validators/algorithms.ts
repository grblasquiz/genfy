// Pure validation algorithms shared between ES and EN pages.

export type ValidationResult = {
  valid: boolean;
  reason?: string;        // i18n key or plain text (the page wraps it)
  details?: Record<string, string | number | boolean>;
};

// ---------- Luhn (tarjetas de crédito, IMEI) ----------
export function validateLuhn(input: string): ValidationResult {
  const digits = input.replace(/[\s-]/g, '');
  if (!/^\d+$/.test(digits)) return { valid: false, reason: 'non-numeric' };
  if (digits.length < 8 || digits.length > 19) return { valid: false, reason: 'length-out-of-range', details: { length: digits.length } };
  let sum = 0;
  let alt = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let n = parseInt(digits[i], 10);
    if (alt) { n *= 2; if (n > 9) n -= 9; }
    sum += n;
    alt = !alt;
  }
  const valid = sum % 10 === 0;
  // Brand detection
  let brand = 'unknown';
  if (/^4\d{12}(\d{3})?(\d{3})?$/.test(digits)) brand = 'Visa';
  else if (/^5[1-5]\d{14}$/.test(digits) || /^2(2[2-9]\d|[3-6]\d{2}|7[01]\d|720)\d{12}$/.test(digits)) brand = 'Mastercard';
  else if (/^3[47]\d{13}$/.test(digits)) brand = 'American Express';
  else if (/^6(011|5\d{2})\d{12}$/.test(digits)) brand = 'Discover';
  else if (/^(?:5[06-9]|6\d)\d{10,17}$/.test(digits)) brand = 'Maestro';
  return { valid, reason: valid ? undefined : 'luhn-checksum-fail', details: { brand, length: digits.length } };
}

// ---------- CUIT/CUIL (Argentina) ----------
// Format: XX-XXXXXXXX-X (11 digits). Checksum: weighted sum mod 11.
export function validateCuit(input: string): ValidationResult {
  const digits = input.replace(/[-.\s]/g, '');
  if (!/^\d{11}$/.test(digits)) return { valid: false, reason: 'must-be-11-digits' };
  const weights = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < 10; i++) sum += parseInt(digits[i], 10) * weights[i];
  let dv = 11 - (sum % 11);
  if (dv === 11) dv = 0;
  else if (dv === 10) return { valid: false, reason: 'invalid-cuit-no-dv' };
  const valid = dv === parseInt(digits[10], 10);
  const prefix = digits.slice(0, 2);
  let kind = 'unknown';
  if (['20', '23', '24', '27'].includes(prefix)) kind = 'persona';
  else if (['30', '33', '34'].includes(prefix)) kind = 'empresa';
  return { valid, reason: valid ? undefined : 'cuit-dv-mismatch', details: { kind, prefix } };
}

// ---------- RUT (Chile) ----------
// Format: 12345678-K (last char is digit or K). Checksum: mod 11.
export function validateRutChile(input: string): ValidationResult {
  const clean = input.replace(/\./g, '').replace(/-/g, '').toUpperCase();
  if (!/^\d{7,8}[0-9K]$/.test(clean)) return { valid: false, reason: 'invalid-format' };
  const num = clean.slice(0, -1);
  const dv = clean.slice(-1);
  let sum = 0;
  let multiplier = 2;
  for (let i = num.length - 1; i >= 0; i--) {
    sum += parseInt(num[i], 10) * multiplier;
    multiplier = multiplier === 7 ? 2 : multiplier + 1;
  }
  const remainder = 11 - (sum % 11);
  let expected: string;
  if (remainder === 11) expected = '0';
  else if (remainder === 10) expected = 'K';
  else expected = String(remainder);
  return { valid: expected === dv, reason: expected === dv ? undefined : 'dv-mismatch', details: { expected_dv: expected } };
}

// ---------- ISBN-10 ----------
export function validateIsbn10(input: string): ValidationResult {
  const clean = input.replace(/[-\s]/g, '').toUpperCase();
  if (!/^\d{9}[\dX]$/.test(clean)) return { valid: false, reason: 'must-be-10-chars' };
  let sum = 0;
  for (let i = 0; i < 9; i++) sum += parseInt(clean[i], 10) * (10 - i);
  const last = clean[9];
  sum += last === 'X' ? 10 : parseInt(last, 10);
  return { valid: sum % 11 === 0, reason: sum % 11 === 0 ? undefined : 'checksum-fail' };
}

// ---------- ISBN-13 ----------
export function validateIsbn13(input: string): ValidationResult {
  const clean = input.replace(/[-\s]/g, '');
  if (!/^\d{13}$/.test(clean)) return { valid: false, reason: 'must-be-13-digits' };
  let sum = 0;
  for (let i = 0; i < 13; i++) sum += parseInt(clean[i], 10) * (i % 2 === 0 ? 1 : 3);
  return { valid: sum % 10 === 0, reason: sum % 10 === 0 ? undefined : 'checksum-fail' };
}

// ---------- IBAN ----------
// mod-97 checksum on rearranged digits (after letter→digit conversion: A=10..Z=35).
export function validateIban(input: string): ValidationResult {
  const clean = input.replace(/\s/g, '').toUpperCase();
  if (!/^[A-Z]{2}\d{2}[A-Z0-9]{4,30}$/.test(clean)) return { valid: false, reason: 'invalid-format' };
  if (clean.length < 15 || clean.length > 34) return { valid: false, reason: 'length-out-of-range' };
  // Rearrange: move first 4 chars to end
  const rearranged = clean.slice(4) + clean.slice(0, 4);
  // Convert letters to numbers
  let numeric = '';
  for (const ch of rearranged) {
    if (/\d/.test(ch)) numeric += ch;
    else numeric += String(ch.charCodeAt(0) - 55); // A=10, B=11, ..., Z=35
  }
  // Compute mod 97 in chunks (numeric can be huge)
  let remainder = 0;
  for (let i = 0; i < numeric.length; i += 9) {
    const chunk = String(remainder) + numeric.slice(i, i + 9);
    remainder = parseInt(chunk, 10) % 97;
  }
  const country = clean.slice(0, 2);
  return { valid: remainder === 1, reason: remainder === 1 ? undefined : 'checksum-fail', details: { country, length: clean.length } };
}

// ---------- DNI (España) ----------
// 8 digits + letter. Letter is calculated from digits mod 23.
export function validateDniEs(input: string): ValidationResult {
  const clean = input.replace(/[-\s]/g, '').toUpperCase();
  if (!/^\d{8}[A-Z]$/.test(clean)) return { valid: false, reason: 'invalid-format' };
  const digits = parseInt(clean.slice(0, 8), 10);
  const letter = clean[8];
  const letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
  const expected = letters[digits % 23];
  return { valid: expected === letter, reason: expected === letter ? undefined : 'letter-mismatch', details: { expected_letter: expected } };
}

// ---------- CPF (Brasil) ----------
// 11 digits with two check digits.
export function validateCpf(input: string): ValidationResult {
  const clean = input.replace(/[.\-\s]/g, '');
  if (!/^\d{11}$/.test(clean)) return { valid: false, reason: 'must-be-11-digits' };
  // Reject all-same digits (e.g., 11111111111)
  if (/^(\d)\1{10}$/.test(clean)) return { valid: false, reason: 'all-same-digits' };
  function checkDigit(slice: string, weightStart: number): number {
    let sum = 0;
    for (let i = 0; i < slice.length; i++) sum += parseInt(slice[i], 10) * (weightStart - i);
    const r = (sum * 10) % 11;
    return r === 10 ? 0 : r;
  }
  const dv1 = checkDigit(clean.slice(0, 9), 10);
  const dv2 = checkDigit(clean.slice(0, 10), 11);
  const valid = dv1 === parseInt(clean[9], 10) && dv2 === parseInt(clean[10], 10);
  return { valid, reason: valid ? undefined : 'check-digits-mismatch' };
}

// ---------- CBU (Argentina) ----------
// 22 digits, two checksums (positions 8 and 22).
export function validateCbu(input: string): ValidationResult {
  const clean = input.replace(/[\s-]/g, '');
  if (!/^\d{22}$/.test(clean)) return { valid: false, reason: 'must-be-22-digits' };
  // First block: 8 digits (bank + branch + check)
  const block1 = clean.slice(0, 8);
  const w1 = [7, 1, 3, 9, 7, 1, 3];
  let sum1 = 0;
  for (let i = 0; i < 7; i++) sum1 += parseInt(block1[i], 10) * w1[i];
  const dv1 = (10 - (sum1 % 10)) % 10;
  if (dv1 !== parseInt(block1[7], 10)) return { valid: false, reason: 'block1-dv-mismatch' };
  // Second block: 14 digits (account + check)
  const block2 = clean.slice(8);
  const w2 = [3, 9, 7, 1, 3, 9, 7, 1, 3, 9, 7, 1, 3];
  let sum2 = 0;
  for (let i = 0; i < 13; i++) sum2 += parseInt(block2[i], 10) * w2[i];
  const dv2 = (10 - (sum2 % 10)) % 10;
  const valid = dv2 === parseInt(block2[13], 10);
  return { valid, reason: valid ? undefined : 'block2-dv-mismatch' };
}

// ---------- BIC / SWIFT ----------
// 8 or 11 chars. AAAA BB CC (DDD optional).
export function validateBicSwift(input: string): ValidationResult {
  const clean = input.replace(/\s/g, '').toUpperCase();
  if (!/^[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}([A-Z0-9]{3})?$/.test(clean)) return { valid: false, reason: 'invalid-format' };
  return { valid: true, details: { bank_code: clean.slice(0, 4), country: clean.slice(4, 6), location: clean.slice(6, 8), branch: clean.length === 11 ? clean.slice(8) : 'main' } };
}

export const VALIDATORS = {
  luhn: validateLuhn,
  cuit: validateCuit,
  'rut-chile': validateRutChile,
  'isbn-10': validateIsbn10,
  'isbn-13': validateIsbn13,
  iban: validateIban,
  'dni-es': validateDniEs,
  cpf: validateCpf,
  cbu: validateCbu,
  bic: validateBicSwift,
} as const;

export type ValidatorId = keyof typeof VALIDATORS;
