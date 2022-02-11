const {MongoClient} = require('mongodb')

const url = 'mongodb://127.0.0.1:27017'
connect();

async function connect(){
    const client = new MongoClient(url);
    try {
        await client.connect();
        const db = client.db("dataDb");
        console.log('connected to database')
    }
    catch (ex) {
        console.log('error occurred')
    }
    finally {
        client.close();
    }
}