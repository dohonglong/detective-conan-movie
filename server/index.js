// For backend and express
//const { MongoClient } = require("mongodb");
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Replace the following with your Atlas connection string
const url = `${process.env.MONGO_URI}`;

// Check if the app is working or not
app.get("/", (req, resp) => {
  resp.send("HELLO, BB HÔM NAY TỚI CHƠI NÀY");
});

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

// MOVIE TABS
//Schema for movies
const MovieSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  original_title: {
    type: String,
    required: true,
  },
});
const Movie = mongoose.model("Movie", MovieSchema);

// API to fetch movies
app.get("/api/movies", async (req, res) => {
  try {
    //console.log("Successfully connected to Atlas");
    const movies = await Movie.find();
    //console.log(movies);
    res.json(movies);
  } catch (error) {
    console.log(error.stack); // Log error only on the backend
    res.status(500).json({ error: "Error fetching data" });
  }
});

// USERS TAB
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

// This is for register part
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

app.listen(5000, () => {
  console.log("App listening at port 5000");
});
