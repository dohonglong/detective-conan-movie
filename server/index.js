// For backend and express
//const { MongoClient } = require("mongodb");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Movie = require("./models/MovieSchema");
const Character = require("./models/CharacterSchema");

const app = express();
app.use(cors());
app.use(express.json());

// Check if the app is working or not
app.get("/", (req, resp) => {
  resp.send("ALO ALO CONNECT");
});

// To connect with your mongoDB database
mongoose
  .connect(`${process.env.MONGO_URI}`, {
    dbName: "detective_conan",
    autoIndex: false,
  })
  .then(() => console.log("Connected to Conan Movie database"))
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });

// API to FETCH all movies with populated characters
app.get("/api/movies", async (req, res) => {
  try {
    const movies = await Movie.find().populate("characters").exec();
    res.json(movies);
  } catch (error) {
    console.log(error.stack); // Log error only on the backend
    res.status(500).json({ error: "Error fetching data" });
  }
});

// API to FETCH ONE movie by ID
app.get("/api/movie/:movie_ID", async (req, res) => {
  try {
    const movieTitle = req.params.movie_ID;
    const movie = await Movie.findOne({ movie_ID: movieTitle })
      .populate("characters")
      .exec();
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.json(movie);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ error: "Error fetching movie details" });
  }
});

// API to FETCH all characters
app.get("/api/characters", async (req, res) => {
  try {
    const characters = await Character.find()
      .sort({ _id: 1 })
      .populate("movies")
      .exec();
    res.json(characters);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ error: "Error fetching characters" });
  }
});

// API to FETCH a single character by ID with populated movies
app.get("/api/character/:character_ID", async (req, res) => {
  try {
    const characterName = req.params.character_ID;
    const character = await Character.findOne({ character_ID: characterName })
      .populate("movies")
      .exec();
    if (!character) {
      return res.status(404).json({ error: "Character not found" });
    }
    res.json(character);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ error: "Error fetching character details" });
  }
});

app.listen(5000, () => {
  console.log("App listening at port 5000");
});
