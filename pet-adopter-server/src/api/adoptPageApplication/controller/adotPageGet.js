require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sumankalia:Just23456789@cluster0.vjmqg.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const getdata = async(req,res,next)=>{
    const adoptData = client.db("petAdopterDB").collection("adoptData");
   
    const cursor = await adoptData.find().toArray();
    const result = await cursor;
    res.send(result)

}
module.exports = getdata