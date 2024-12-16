// SCHEMA FOR THE CHARACTERS
const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema(
  {
    _id: {
      type: Number, // Use integers for `_id`
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    age: { type: String },
    gender: { type: String },
    date_of_birth: { type: String },
    status: { type: String }, // e.g., alive, deceased
    movies: [
      {
        type: Number,
        ref: "Movie", // Reference to the Movie schema
      },
    ],
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Character", CharacterSchema);
