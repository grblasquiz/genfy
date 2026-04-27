import type { GenData } from './types';

export const data: GenData = {
  "slug": {
    "es": "generador-de-queries-mongodb",
    "en": "mongodb-query-generator"
  },
  "category": "data",
  "emoji": "🍃",
  "mode": "pick",
  "es": {
    "pageTitle": "Generador de Queries MongoDB | Genfy",
    "metaDesc": "Genera queries MongoDB con agregaciones, filtros y operadores. Ejemplos listos para usar en find, aggregate, update y más. Copiá y ajustá al instante.",
    "h1": "Generador de Queries MongoDB",
    "intro": "Creá queries MongoDB con un click: desde filtros básicos hasta pipelines de agregación complejos. Ideal para aprender sintaxis o acelerar tu desarrollo.",
    "tag": "Datos",
    "filterLabel": "Tipo de query",
    "countLabel": "Cantidad",
    "generateLabel": "Generar",
    "copyLabel": "Copiar",
    "groups": [
      {
        "id": "type",
        "label": "Operación",
        "items": [
          "db.collection.find({ status: 'active' })",
          "db.collection.findOne({ _id: ObjectId('...') })",
          "db.collection.aggregate([{ $match: { age: { $gte: 18 } } }])",
          "db.collection.updateOne({ email: 'user@domain.com' }, { $set: { verified: true } })",
          "db.collection.updateMany({ status: 'pending' }, { $set: { status: 'processed' } })",
          "db.collection.deleteOne({ _id: ObjectId('...') })",
          "db.collection.deleteMany({ createdAt: { $lt: new Date('2023-01-01') } })",
          "db.collection.countDocuments({ category: 'electronics' })",
          "db.collection.distinct('country')",
          "db.collection.insertOne({ name: 'Product', price: 99.99 })",
          "db.collection.insertMany([{ item: 'A' }, { item: 'B' }])",
          "db.collection.find({ tags: { $in: ['mongodb', 'database'] } })",
          "db.collection.find({ price: { $gt: 100, $lt: 500 } })",
          "db.collection.find({ $or: [{ status: 'active' }, { priority: 'high' }] })",
          "db.collection.find({ 'address.city': 'Buenos Aires' })",
          "db.collection.find({ items: { $elemMatch: { qty: { $gt: 10 } } } })",
          "db.collection.find().sort({ createdAt: -1 }).limit(10)",
          "db.collection.find().skip(20).limit(10)",
          "db.collection.createIndex({ email: 1 }, { unique: true })",
          "db.collection.aggregate([{ $group: { _id: '$category', total: { $sum: '$amount' } } }])",
          "db.collection.aggregate([{ $lookup: { from: 'users', localField: 'userId', foreignField: '_id', as: 'user' } }])",
          "db.collection.aggregate([{ $unwind: '$tags' }])",
          "db.collection.aggregate([{ $project: { name: 1, total: { $multiply: ['$price', '$quantity'] } } }])",
          "db.collection.aggregate([{ $sort: { score: -1 } }, { $limit: 5 }])",
          "db.collection.find({ $text: { $search: 'mongodb tutorial' } })",
          "db.collection.updateOne({ _id: ObjectId('...') }, { $inc: { views: 1 } })",
          "db.collection.updateMany({}, { $rename: { 'oldField': 'newField' } })",
          "db.collection.updateOne({ _id: ObjectId('...') }, { $push: { comments: { text: 'Great!' } } })",
          "db.collection.updateOne({ _id: ObjectId('...') }, { $pull: { tags: 'deprecated' } })",
          "db.collection.updateOne({ _id: ObjectId('...') }, { $addToSet: { skills: 'MongoDB' } })",
          "db.collection.bulkWrite([{ insertOne: { document: { name: 'Item' } } }, { updateOne: { filter: { _id: 1 }, update: { $set: { status: 'done' } } } }])",
          "db.collection.find({ date: { $gte: ISODate('2024-01-01'), $lt: ISODate('2024-12-31') } })",
          "db.collection.aggregate([{ $facet: { byCategory: [{ $group: { _id: '$category', count: { $sum: 1 } } }], byStatus: [{ $group: { _id: '$status', count: { $sum: 1 } } }] } }])",
          "db.collection.aggregate([{ $bucket: { groupBy: '$price', boundaries: [0, 50, 100, 200], default: 'Other' } }])",
          "db.collection.find({ $expr: { $gt: ['$spent', '$budget'] } })",
          "db.collection.replaceOne({ _id: ObjectId('...') }, { name: 'New Document', status: 'active' })",
          "db.collection.find({ reviews: { $size: 0 } })",
          "db.collection.aggregate([{ $graphLookup: { from: 'employees', startWith: '$managerId', connectFromField: 'managerId', connectToField: '_id', as: 'reportingHierarchy' } }])",
          "db.collection.find({ $and: [{ price: { $exists: true } }, { price: { $ne: null } }] })",
          "db.collection.aggregate([{ $addFields: { fullName: { $concat: ['$firstName', ' ', '$lastName'] } } }])",
          "db.collection.watch([{ $match: { operationType: 'insert' } }])",
          "db.collection.findOneAndUpdate({ _id: ObjectId('...') }, { $set: { status: 'completed' } }, { returnDocument: 'after' })",
          "db.collection.findOneAndDelete({ status: 'archived' })",
          "db.collection.aggregate([{ $sample: { size: 10 } }])",
          "db.collection.aggregate([{ $redact: { $cond: { if: { $eq: ['$level', 5] }, then: '$$PRUNE', else: '$$DESCEND' } } }])",
          "db.collection.find({ coordinates: { $near: { $geometry: { type: 'Point', coordinates: [-73.9667, 40.78] }, $maxDistance: 1000 } } })",
          "db.collection.aggregate([{ $geoNear: { near: { type: 'Point', coordinates: [-73.9667, 40.78] }, distanceField: 'distance', spherical: true } }])"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "¿Por qué usar un generador de queries MongoDB?",
        "body": "<p>MongoDB tiene una sintaxis rica pero no siempre intuitiva. Recordar la estructura exacta de <code>$lookup</code>, <code>$facet</code> o <code>$geoNear</code> consume tiempo. Este generador te da ejemplos reales que podés adaptar: cambiás nombres de colección, ajustás campos y listo. Es especialmente útil cuando migrás de SQL y todavía pensás en JOINs en lugar de pipelines, o cuando necesitás prototipar rápido sin consultar docs. Los ejemplos cubren desde CRUD básico hasta agregaciones multi-stage y operaciones geoespaciales.</p>"
      },
      {
        "h2": "Errores comunes al escribir queries MongoDB",
        "body": "<p><strong>Olvidar ObjectId():</strong> Si buscás por <code>_id</code> con un string, no va a matchear; necesitás <code>ObjectId('...')</code>. <strong>Confundir $set con $push:</strong> <code>$set</code> reemplaza un campo; <code>$push</code> agrega a un array. <strong>Usar $size con rangos:</strong> <code>$size</code> solo acepta valores exactos; para rangos usá <code>$expr</code> con <code>$gte</code>. <strong>No indexar campos filtrados:</strong> Queries en campos sin índice son lentas en colecciones grandes; creá índices con <code>createIndex</code>. <strong>Pipelines sin $match temprano:</strong> Poné <code>$match</code> lo antes posible para reducir documentos procesados.</p>"
      },
      {
        "h2": "Operadores que todo developer MongoDB debe conocer",
        "body": "<p><code>$match</code> filtra documentos (equivalente a WHERE). <code>$group</code> agrupa y calcula (SUM, AVG, COUNT). <code>$lookup</code> hace joins entre colecciones. <code>$project</code> selecciona/transforma campos. <code>$unwind</code> descompone arrays en documentos individuales. <code>$sort</code> ordena (1 ascendente, -1 descendente). <code>$limit</code> y <code>$skip</code> paginan resultados. <code>$addFields</code> crea campos calculados sin eliminar existentes. <code>$facet</code> ejecuta múltiples pipelines en paralelo. <code>$geoNear</code> busca por proximidad geográfica. Combiná estos operadores para queries complejas manteniendo legibilidad.</p>"
      },
      {
        "h2": "Cuándo usar aggregate en lugar de find",
        "body": "<p>Usá <code>find()</code> para consultas simples: filtrar, ordenar, limitar. Es más rápido y directo cuando no necesitás transformar datos. Pasá a <code>aggregate()</code> cuando necesités: calcular totales/promedios por grupo, hacer joins con <code>$lookup</code>, aplanar arrays con <code>$unwind</code>, crear campos calculados, filtrar después de agrupar (<code>$match</code> post-<code>$group</code>), o ejecutar análisis complejos. Aggregate es más potente pero también más pesado; si solo necesitás <code>{ status: 'active' }</code>, <code>find</code> es suficiente. Regla práctica: si necesitás más de un paso de transformación, aggregate es tu herramienta.</p>"
      }
    ],
    "faq": [
      {
        "q": "¿Cómo filtro por fecha en MongoDB?",
        "a": "Usá <code>{ date: { $gte: ISODate('2024-01-01'), $lt: ISODate('2024-12-31') } }</code> con objetos ISODate para rangos precisos."
      },
      {
        "q": "¿Qué es un pipeline de agregación?",
        "a": "Es una secuencia de etapas (stages) que procesan documentos en orden: <code>[{ $match }, { $group }, { $sort }]</code>. Cada stage transforma la salida de la anterior."
      },
      {
        "q": "¿Cómo hago un join en MongoDB?",
        "a": "Usá <code>$lookup</code> en aggregate: <code>{ $lookup: { from: 'otherCollection', localField: 'userId', foreignField: '_id', as: 'userData' } }</code>."
      },
      {
        "q": "¿Puedo actualizar múltiples documentos con un solo comando?",
        "a": "Sí, con <code>updateMany()</code>: <code>db.collection.updateMany({ status: 'old' }, { $set: { status: 'new' } })</code> actualiza todos los matches."
      }
    ]
  },
  "en": {
    "pageTitle": "MongoDB Query Generator | Genfy",
    "metaDesc": "Generate MongoDB queries with aggregations, filters, and operators. Ready-to-use examples for find, aggregate, update and more. Copy and tweak instantly.",
    "h1": "MongoDB Query Generator",
    "intro": "Create MongoDB queries with one click: from basic filters to complex aggregation pipelines. Perfect for learning syntax or speeding up your workflow.",
    "tag": "Data",
    "filterLabel": "Query type",
    "countLabel": "Amount",
    "generateLabel": "Generate",
    "copyLabel": "Copy",
    "groups": [
      {
        "id": "type",
        "label": "Operation",
        "items": [
          "db.collection.find({ status: 'active' })",
          "db.collection.findOne({ _id: ObjectId('...') })",
          "db.collection.aggregate([{ $match: { age: { $gte: 18 } } }])",
          "db.collection.updateOne({ email: 'user@domain.com' }, { $set: { verified: true } })",
          "db.collection.updateMany({ status: 'pending' }, { $set: { status: 'processed' } })",
          "db.collection.deleteOne({ _id: ObjectId('...') })",
          "db.collection.deleteMany({ createdAt: { $lt: new Date('2023-01-01') } })",
          "db.collection.countDocuments({ category: 'electronics' })",
          "db.collection.distinct('country')",
          "db.collection.insertOne({ name: 'Product', price: 99.99 })",
          "db.collection.insertMany([{ item: 'A' }, { item: 'B' }])",
          "db.collection.find({ tags: { $in: ['mongodb', 'database'] } })",
          "db.collection.find({ price: { $gt: 100, $lt: 500 } })",
          "db.collection.find({ $or: [{ status: 'active' }, { priority: 'high' }] })",
          "db.collection.find({ 'address.city': 'New York' })",
          "db.collection.find({ items: { $elemMatch: { qty: { $gt: 10 } } } })",
          "db.collection.find().sort({ createdAt: -1 }).limit(10)",
          "db.collection.find().skip(20).limit(10)",
          "db.collection.createIndex({ email: 1 }, { unique: true })",
          "db.collection.aggregate([{ $group: { _id: '$category', total: { $sum: '$amount' } } }])",
          "db.collection.aggregate([{ $lookup: { from: 'users', localField: 'userId', foreignField: '_id', as: 'user' } }])",
          "db.collection.aggregate([{ $unwind: '$tags' }])",
          "db.collection.aggregate([{ $project: { name: 1, total: { $multiply: ['$price', '$quantity'] } } }])",
          "db.collection.aggregate([{ $sort: { score: -1 } }, { $limit: 5 }])",
          "db.collection.find({ $text: { $search: 'mongodb tutorial' } })",
          "db.collection.updateOne({ _id: ObjectId('...') }, { $inc: { views: 1 } })",
          "db.collection.updateMany({}, { $rename: { 'oldField': 'newField' } })",
          "db.collection.updateOne({ _id: ObjectId('...') }, { $push: { comments: { text: 'Great!' } } })",
          "db.collection.updateOne({ _id: ObjectId('...') }, { $pull: { tags: 'deprecated' } })",
          "db.collection.updateOne({ _id: ObjectId('...') }, { $addToSet: { skills: 'MongoDB' } })",
          "db.collection.bulkWrite([{ insertOne: { document: { name: 'Item' } } }, { updateOne: { filter: { _id: 1 }, update: { $set: { status: 'done' } } } }])",
          "db.collection.find({ date: { $gte: ISODate('2024-01-01'), $lt: ISODate('2024-12-31') } })",
          "db.collection.aggregate([{ $facet: { byCategory: [{ $group: { _id: '$category', count: { $sum: 1 } } }], byStatus: [{ $group: { _id: '$status', count: { $sum: 1 } } }] } }])",
          "db.collection.aggregate([{ $bucket: { groupBy: '$price', boundaries: [0, 50, 100, 200], default: 'Other' } }])",
          "db.collection.find({ $expr: { $gt: ['$spent', '$budget'] } })",
          "db.collection.replaceOne({ _id: ObjectId('...') }, { name: 'New Document', status: 'active' })",
          "db.collection.find({ reviews: { $size: 0 } })",
          "db.collection.aggregate([{ $graphLookup: { from: 'employees', startWith: '$managerId', connectFromField: 'managerId', connectToField: '_id', as: 'reportingHierarchy' } }])",
          "db.collection.find({ $and: [{ price: { $exists: true } }, { price: { $ne: null } }] })",
          "db.collection.aggregate([{ $addFields: { fullName: { $concat: ['$firstName', ' ', '$lastName'] } } }])",
          "db.collection.watch([{ $match: { operationType: 'insert' } }])",
          "db.collection.findOneAndUpdate({ _id: ObjectId('...') }, { $set: { status: 'completed' } }, { returnDocument: 'after' })",
          "db.collection.findOneAndDelete({ status: 'archived' })",
          "db.collection.aggregate([{ $sample: { size: 10 } }])",
          "db.collection.aggregate([{ $redact: { $cond: { if: { $eq: ['$level', 5] }, then: '$$PRUNE', else: '$$DESCEND' } } }])",
          "db.collection.find({ coordinates: { $near: { $geometry: { type: 'Point', coordinates: [-73.9667, 40.78] }, $maxDistance: 1000 } } })",
          "db.collection.aggregate([{ $geoNear: { near: { type: 'Point', coordinates: [-73.9667, 40.78] }, distanceField: 'distance', spherical: true } }])"
        ]
      }
    ],
    "defaultCount": 5,
    "maxCount": 30,
    "content": [
      {
        "h2": "Why use a MongoDB query generator?",
        "body": "<p>MongoDB's syntax is powerful but not always intuitive. Remembering the exact structure of <code>$lookup</code>, <code>$facet</code>, or <code>$geoNear</code> takes time. This generator gives you real examples you can adapt: change collection names, adjust fields, and you're done. It's especially useful when migrating from SQL and still thinking in JOINs instead of pipelines, or when you need to prototype quickly without consulting docs. Examples cover everything from basic CRUD to multi-stage aggregations and geospatial operations.</p>"
      },
      {
        "h2": "Common mistakes when writing MongoDB queries",
        "body": "<p><strong>Forgetting ObjectId():</strong> If you search by <code>_id</code> with a string, it won't match; you need <code>ObjectId('...')</code>. <strong>Confusing $set with $push:</strong> <code>$set</code> replaces a field; <code>$push</code> appends to an array. <strong>Using $size with ranges:</strong> <code>$size</code> only accepts exact values; for ranges use <code>$expr</code> with <code>$gte</code>. <strong>Not indexing filtered fields:</strong> Queries on unindexed fields are slow on large collections; create indexes with <code>createIndex</code>. <strong>Pipelines without early $match:</strong> Put <code>$match</code> as early as possible to reduce processed documents.</p>"
      },
      {
        "h2": "Operators every MongoDB developer should know",
        "body": "<p><code>$match</code> filters documents (equivalent to WHERE). <code>$group</code> aggregates and calculates (SUM, AVG, COUNT). <code>$lookup</code> joins collections. <code>$project</code> selects/transforms fields. <code>$unwind</code> deconstructs arrays into individual documents. <code>$sort</code> orders (1 ascending, -1 descending). <code>$limit</code> and <code>$skip</code> paginate results. <code>$addFields</code> creates calculated fields without removing existing ones. <code>$facet</code> runs multiple pipelines in parallel. <code>$geoNear</code> searches by geographic proximity. Combine these operators for complex queries while maintaining readability.</p>"
      },
      {
        "h2": "When to use aggregate instead of find",
        "body": "<p>Use <code>find()</code> for simple queries: filter, sort, limit. It's faster and more direct when you don't need to transform data. Switch to <code>aggregate()</code> when you need to: calculate totals/averages by group, join with <code>$lookup</code>, flatten arrays with <code>$unwind</code>, create calculated fields, filter after grouping (<code>$match</code> post-<code>$group</code>), or run complex analytics. Aggregate is more powerful but also heavier; if you only need <code>{ status: 'active' }</code>, <code>find</code> is enough. Rule of thumb: if you need more than one transformation step, aggregate is your tool.</p>"
      }
    ],
    "faq": [
      {
        "q": "How do I filter by date in MongoDB?",
        "a": "Use <code>{ date: { $gte: ISODate('2024-01-01'), $lt: ISODate('2024-12-31') } }</code> with ISODate objects for precise ranges."
      },
      {
        "q": "What is an aggregation pipeline?",
        "a": "It's a sequence of stages that process documents in order: <code>[{ $match }, { $group }, { $sort }]</code>. Each stage transforms the output of the previous one."
      },
      {
        "q": "How do I do a join in MongoDB?",
        "a": "Use <code>$lookup</code> in aggregate: <code>{ $lookup: { from: 'otherCollection', localField: 'userId', foreignField: '_id', as: 'userData' } }</code>."
      },
      {
        "q": "Can I update multiple documents with a single command?",
        "a": "Yes, with <code>updateMany()</code>: <code>db.collection.updateMany({ status: 'old' }, { $set: { status: 'new' } })</code> updates all matches."
      }
    ]
  }
};
