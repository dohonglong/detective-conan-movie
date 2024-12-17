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
  age: {
    type: String,
  },
  gender: {
    type: String,
  },
  date_of_birth: {
    type: String,
  },
  status: {
    type: String,
    default: "Unknown", // Default to "unknown" if status is not provided
  },
  movies: [
    {
      type: Number, // Matches the `_id` type in the Movie collection
      ref: "Movie", // References the Movie collection
    },
  ],
});

module.exports = mongoose.model("Character", CharacterSchema);
