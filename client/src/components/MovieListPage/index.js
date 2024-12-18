import React from "react";

import useMovieListPage from "../../custom-hooks/useMovieListPage";
import MovieListTable from "./MovieListTable";
import Detective_Conan_logo from "../Logo/Detective_Conan_logo.png";

const MovieList = () => {
  const [movies, loading, error] = useMovieListPage([]);

  if (loading) {
    return <div>Loading movie list. Please wait...</div>;
  }
  if (error) {
    return <p>Something went wrong. Can't load the movie page.</p>;
  }

  return (
    <div className="home-container">
      <div className="logo">
        <img src={Detective_Conan_logo} width={400} alt="Conan logo" />
      </div>
      <MovieListTable movieList={movies} />
    </div>
  );
};

export default MovieList;
