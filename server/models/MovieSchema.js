// SCHEMA FOR THE MOVIES
const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true,
    },
    movie_ID: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    original_title: {
      type: [String],
      required: true,
    },
    overview: {
      type: String,
    },
    media_type: { type: String },
    adult: { type: Boolean },
    original_language: { type: String },
    release_date: { type: String },
    theme_song: { type: String },
    characters: [
      {
        type: Number,
        ref: "Character",
      },
    ],
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Movie", MovieSchema);
