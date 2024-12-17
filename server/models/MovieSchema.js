const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  movie_ID: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
  },
  original_title: {
    type: [String], // Array of strings
  },
  overview: {
    type: String,
  },
  media_type: {
    type: String,
  },
  adult: {
    type: Boolean,
  },
  release_date: {
    type: String,
  },
  running_time: {
    type: String,
  },
  country: {
    type: String,
  },
  original_language: {
    type: String,
  },
  theme_song: {
    song: { type: String },
    artist: { type: String },
    link_code: { type: String },
  },
  soundtrack: {
    type: String,
  },
  characters: [
    {
      type: Number, // Matches `_id` type in the Character collection
      ref: "Character", // References the Character collection
    },
  ],
  logo: {
    type: String,
  },
  poster_url: {
    type: String,
  },
  trailer: {
    type: String,
  },
});

module.exports = mongoose.model("Movie", MovieSchema);
