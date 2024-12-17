import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Character = () => {
  const { characterName } = useParams();
  //console.log(characterName);
  const [character, setCharacter] = useState(null); // Store movie data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const ApiURL = process.env.REACT_APP_API_URL;
    const fetchCharacter = async () => {
      try {
        // Fetch the character details by ID from the backend
        const response = await fetch(
          `${ApiURL}/api/character/${characterName}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch character");
        }
        const data = await response.json();
        //console.log(data);
        setCharacter(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacter();
  }, [characterName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="movie-container">
      <h1 style={{ textAlign: "center" }}> {character.name}</h1>
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
