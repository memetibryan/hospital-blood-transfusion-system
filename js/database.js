const {
    MongoClient
} = require('mongodb')

const url = 'mongodb://127.0.0.1:27017'
connect();

async function connect() {
    const client = new MongoClient(url);
    try {
        await client.connect();
        const db = client.db("dataDb");
        console.log('connected to database')

        const collections = await db.collections();
        collections.forEach(c => console.log(c.collectionName));

        //inserting into patients
        const insertCursor = await db.patients.insert([{"name": "Chaitanya","location": "voi","tel": 9876544567}])
        
        console.log(insertCursor.insertedCount)

        //search
        const patients = db.collection("patients");
        const searchCursor = await patients.find();
        const result = await searchCursor.toArray();
        console.table(result)

    } catch (err) {
        console.log(err)
    } finally {
        client.close();
    }
}