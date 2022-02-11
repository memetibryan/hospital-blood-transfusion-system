const {MongoClient} = require('mongodb')

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

        //inserting into hospitals
        const insertCursor = await hospitals.insert({
            "name": document.getElementById("fname").value,
            "location": document.getElementById("location").value,
            "tel": document.getElementById("telephone").value
        })

        console.log(insertCursor.insertedCount)

        //search
        const hospitals = db.collection("hospitals");
        const searchCursor = await hospitals.find();
        const result = await searchCursor.toArray();
        console.table(result)

    } catch (err) {
        console.log(err)
    } finally {
        client.close();
    }
}