import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Character = () => {
  const { characterID } = useParams();
  //const characterID = 101;
  const [character, setCharacter] = useState(null); // Store movie data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        // Fetch the character details by ID from the backend
        const response = await fetch(
          `http://localhost:5000/api/character/${characterID}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch character");
        }
        const data = await response.json();
        //console.log("HELLO");
        console.log(data);
        setCharacter(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacter();
  }, [characterID]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div className="movie-container">
      <h1 style={{ textAlign: "center" }}> {character.name}</h1>
      <h3 style={{ textAlign: "center" }}> Movies appeared in</h3>
      {character.movies.map((movie, index) => (
        <Link key={index} to={`/movie/${movie._id}`}>
          <div>{movie.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default Character;
