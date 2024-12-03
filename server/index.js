// For backend and express
const { MongoClient } = require("mongodb");
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
  resp.send("App is Working");
  // You can check backend is working or not by entering http://loacalhost:5000
  // If you see App is working means backend working properly
});

// Replace the following with your Atlas connection string
const url = `${process.env.MONGO_URI}`;

// Connect to your Atlas cluster
const client = new MongoClient(url);
const run = async () => {
  try {
    await client.connect();
    console.log("Successfully connected to Atlas");
    // database and collection code goes here
    const db = client.db("detective_conan");
    const coll = db.collection("movies");
    // find code goes here
    const cursor = coll.find();
    // iterate code goes here
    //await cursor.forEach(console.log);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
};
run().catch(console.dir);

// To connect with your mongoDB database
const mongoose = require("mongoose");
mongoose
  .connect(`${process.env.MONGO_URI}`, {
    dbName: "detective_conan",
    serverSelectionTimeoutMS: 30000, // 30 seconds
    socketTimeoutMS: 45000, // 45 seconds
    autoIndex: false,
  })
  .then(() => console.log("Connected to data sign in"))
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to DB");
});
mongoose.connection.on("error", (err) => {
  console.error("Mongoose connection error:", err);
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

// Schema for users of app
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("users", UserSchema);
User.createIndexes();

app.post("/register", async (req, resp) => {
  try {
    const user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      resp.send(req.body);
      console.log(result);
    } else {
      console.log("User already register");
    }
  } catch (e) {
    resp.send("Something Went Wrong");
  }
});

app.get("/dbtest", async (req, res) => {
  try {
    const isConnected = mongoose.connection.readyState === 1;
    res.send(
      `Database connection: ${isConnected ? "Connected" : "Not Connected"}`
    );
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
});

app.listen(5000);
