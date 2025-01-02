import useMovieListPage from "../../custom-hooks/useMovieListPage";
import MovieListTable from "./MovieListTable";
import MovieSearchAndFilter from "./MovieSearchAndFilter";
import Detective_Conan_logo from "../Logo/Detective_Conan_logo.png";
import { useState } from "react";

const MovieList = () => {
  const [movies, loading, error] = useMovieListPage([]);
  const [searchInputMovie, setSearchInputMovie] = useState("");
  const [filteredType, setFilterType] = useState("");

  if (loading) {
    return <div>Loading movie list. Please wait...</div>;
  }
  if (error) {
    return <p>Something went wrong. Can't load the movie page.</p>;
  }

  /* For the search field */
  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearchInputMovie(event.target.value);
  };
  /* For the type filter */
  const handleTypeChange = (event) => {
    setFilterType(event.target.value);
  };
  const filteredMovies = movies.filter((movie) => {
    /* For the search field */
    const matchesName = movie.title
      .toLowerCase()
      .includes(searchInputMovie.toLowerCase());
    const matchesId =
      movie._id.toString().includes(searchInputMovie) &&
      !isNaN(searchInputMovie);
    /* For the type filter */
    const matchesType =
      filteredType === "" ||
      (movie.types && movie.types.includes(filteredType));
    return (matchesName || matchesId) && matchesType;
  });

  return (
    <div className="home-container">
      <div className="logo">
        <img
          src={Detective_Conan_logo}
          alt="Conan logo"
          className="responsive-home-logo"
        />
      </div>
      <MovieSearchAndFilter
        setSearchInputMovie={searchInputMovie}
        handleSearchChange={handleSearchChange}
        filteredType={filteredType}
        handleTypeChange={handleTypeChange}
      />
      <MovieListTable movieList={filteredMovies} />
    </div>
  );
};

export default MovieList;
