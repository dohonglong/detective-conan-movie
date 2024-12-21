import { Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const MoviePageCast = ({ movie }) => {
  const headerText = {
    backgroundColor: "#0039a6",
    textAlign: "center",
    color: "white",
    margin: 0,
  };
  return (
    <Paper elevation={3}>
      <h2 style={headerText}>Cast</h2>

      {movie.characters.map((character, index) => (
        <Link key={index} to={`/character/${character.character_ID}`}>
          <div>
            <img
              src={character.image_url_icon}
              width={100}
              alt="Character icon"
            />
            <div>{character.name}</div>
          </div>
        </Link>
      ))}
    </Paper>
  );
};

export default MoviePageCast;
