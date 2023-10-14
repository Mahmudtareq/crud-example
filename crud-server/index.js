const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const { connectToDatabase, client } = require("./dataBase");
// middleware
app.use(cors());
app.use(express.json());

// route
app.get("/", (req, res) => {
  res.send("Crud app is running");
});

// logic start here
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await connectToDatabase();
    // create databse
    const userCollection = client.db("crud_operation").collection("usersData");
    // route
    app.get("/users", async (req, res) => {
      const allUser = userCollection.find();
      const userResult = await allUser.toArray();
      if (userResult) {
        res.send(userResult);
      } else {
        res.status(404);
      }
    });
    app.post("/users", async (req, res) => {
      const newUser = req.body;
      const result = await userCollection.insertOne(newUser);
      console.log(result);
      if (result) {
        res.send(result);
      } else {
        res.status(404);
      }
    });
  } finally {
  }
}
run().catch(console.dir);
// logic end

app.listen(port, () => {
  console.log(`App is runing on port : ${port}`);
});
