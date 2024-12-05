import React, { useEffect, useState } from "react";

const ConanMovie = () => {
  const [movies, setMovies] = useState([]);

  // const ApiURL = process.env.REACT_APP_API_URL;
  // const url = `${ApiURL}/register`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/movies");
        const data = await response.json();
        //console.log(data);
        setMovies(data);
        //console.log(movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Conan Movie</h1>
      <ul>
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <li key={index}>
              <h3>{movie.title}</h3>
              <h4>{movie.original_title}</h4>
            </li>
          ))
        ) : (
          <p>Loading movies... </p>
        )}
      </ul>
    </div>
  );
};

export default ConanMovie;
