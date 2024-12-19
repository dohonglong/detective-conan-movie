import React from "react";
import { Link } from "react-router-dom";

const MoviePageCast = ({ movie }) => {
  const headerText = {
    backgroundColor: "#0039a6",
    textAlign: "center",
    color: "white",
  };
  return (
    <div>
      <h2 style={headerText}>Cast</h2>

      {movie.characters.map((character, index) => (
        <Link key={index} to={`/character/${character.character_ID}`}>
          <div>{character.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default MoviePageCast;
