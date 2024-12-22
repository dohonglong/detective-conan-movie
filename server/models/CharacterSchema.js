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
    default: "unknown",
  },
  gender: {
    type: String,
    default: "unknown",
  },
  height: {
    type: String,
    default: "unknown",
  },
  weight: {
    type: String,
    default: "unknown",
  },
  date_of_birth: {
    type: String,
    default: "unknown",
  },
  nationality: {
    type: String,
    default: "unknown",
  },
  status: {
    type: String,
    default: "unknown",
  },
  description: {
    type: String,
    default: " ",
  },
  image_url_big: {
    type: String,
  },
  image_url_icon: {
    type: String,
  },
  occupations: {
    type: [String],
    default: "unknown",
  },
  groups: {
    type: [String],
    default: "none",
  },
  aliases: {
    type: [String],
    default: "none",
  },
  movies: [
    {
      type: Number, // Matches the `_id` type in the Movie collection
      ref: "Movie", // References the Movie collection
    },
  ],
});

module.exports = mongoose.model("Character", CharacterSchema);
