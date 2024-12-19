const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: true,
  },
  character_ID: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  original_name: {
    type: [String],
  },
  age: {
    type: String,
  },
  gender: {
    type: String,
  },
  height: {
    type: String,
  },
  weight: {
    type: String,
  },
  date_of_birth: {
    type: String,
  },
  nationality: {
    type: String,
  },
  status: {
    type: String,
    default: "Unknown", // Default to "unknown" if status is not provided
  },
  description: {
    type: String,
    default: " ",
  },
  image_url: {
    type: String,
  },
  occupations: {
    type: [String],
  },
  nicknames: {
    type: [String],
  },
  movies: [
    {
      type: Number, // Matches the `_id` type in the Movie collection
      ref: "Movie", // References the Movie collection
    },
  ],
});

module.exports = mongoose.model("Character", CharacterSchema);
