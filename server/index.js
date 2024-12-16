// For backend and express
//const { MongoClient } = require("mongodb");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Movie = require("./models/MovieSchema");

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

mongoose
  .connect(`${process.env.MONGO_URI}`, {
    dbName: "detective_conan",
    // serverSelectionTimeoutMS: 30000, // 30 seconds
    // socketTimeoutMS: 45000, // 45 seconds
    autoIndex: false,
  })
  .then(() => console.log("Connected to data sign in"))
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });

// API to FETCH movies
app.get("/api/movies", async (req, res) => {
  try {
    console.log("Successfully connected to Atlas");
    const movies = await Movie.find();
    //console.log(movies);
    res.json(movies);
  } catch (error) {
    console.log(error.stack); // Log error only on the backend
    res.status(500).json({ error: "Error fetching data" });
  }
});

// API to GET movies
app.get("/api/movie/:id", async (req, res) => {
  try {
    //console.log("Request Params:", req.params.id);
    const movieId = parseInt(req.params.id);
    //console.log("Movie ID = ", movieId);
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    //console.log("Backend Response:", movie); // Log the full response
    res.json(movie);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ error: "Error fetching movie details" });
  }
});

app.listen(5000, () => {
  console.log("App listening at port 5000");
});
