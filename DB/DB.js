import {MongoClient} from 'mongodb';
const url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

export async function mainFunc(r, g, b, hexR, hexG, hexB) {

    await client.connect();

    console.log("Connected");

    const db = client.db("Colors");

    const coll = db.collection("colors")
    await coll.insertOne({r, g, b, hexR});
}
