const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://crud_operations-example:XC7jL4LlEG3uEtrG@cluster0.l1qze.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
// Function to connect to the database
async function connectToDatabase() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB! Successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}


module.exports = { connectToDatabase, client };