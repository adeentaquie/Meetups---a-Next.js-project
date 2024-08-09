import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://adeen:12345@cluster0.asj5i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    console.log(result);
    client.close();

    res.status(201).json({message:"meetup inserted"});
  }
}
export default handler;
