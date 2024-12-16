// SCHEMA FOR THE MOVIES
const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true,
    },
    movie: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    original_title: {
      type: String,
      required: true,
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
    original_language: {
      type: String,
    },
    release_date: {
      type: String,
      required: true,
    },
    theme_song: {
      type: String,
    },
    characters: {
      type: [String],
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Movie", MovieSchema);
