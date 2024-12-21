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
        src={character.image_url_big}
        height={300}
        width="auto"
        alt="Character"
      />
      <h2>Groups: </h2>{" "}
      {character.groups.map((group, index) => (
        <div key={index}>{group}</div>
      ))}
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
