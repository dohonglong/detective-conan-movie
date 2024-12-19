import React from "react";
import { Link } from "react-router-dom";
import useCharacterPage from "../../custom-hooks/useCharacterPage";

const Character = () => {
  const [character, loading, error] = useCharacterPage([]);

  if (loading) {
    return <div>Loading character info...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="movie-container">
      <h1 style={{ textAlign: "center" }}> {character.name}</h1>
      <img
        src="https://www.detectiveconanworld.com/wiki/images/4/4f/Conan_Edogawa.jpg"
        alt="Character"
      />
      <h3 style={{ textAlign: "center" }}> Movies appeared in</h3>
      {character.movies.map((movie, index) => (
        <Link key={index} to={`/movie/${movie.movie_ID}`}>
          <div>{movie.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default Character;
