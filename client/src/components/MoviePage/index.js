import React from "react";

import useMoviePage from "../../custom-hooks/useMoviePage";
import MoviePageTable from "./MoviePageTable";
import MoviePageCast from "./MoviePageCast";

const Movie = () => {
  const [movie, loading, error] = useMoviePage([]);

  if (loading) {
    return <div>Loading movie info...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="movie-container">
      <img src={movie.logo} alt="logo" className="responsive-movie-logo" />

      <MoviePageTable movie={movie} />

      <MoviePageCast movie={movie} />
    </div>
  );
};

export default Movie;
