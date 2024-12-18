import React from "react";
import { Link } from "react-router-dom";

const MoviePageCast = ({ movie }) => {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Cast</h3>

      {movie.characters.map((character, index) => (
        <Link key={index} to={`/character/${character.character_ID}`}>
          <div>{character.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default MoviePageCast;
