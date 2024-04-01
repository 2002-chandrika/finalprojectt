
require('dotenv').config();

const mongoClient = () => {

  const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
  const uri = "mongodb+srv://sumankalia:Just23456789@cluster0.vjmqg.mongodb.net/?retryWrites=true&w=majority";

  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  return [client, ObjectId]

}

module.exports = mongoClient

