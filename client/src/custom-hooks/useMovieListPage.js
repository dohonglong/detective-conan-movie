import { useEffect, useState } from "react";

const useMovieListPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const ApiURL = process.env.REACT_APP_API_URL;
    const url = "http://localhost:5000/api/movies";
    const fetchMovies = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return [movies, loading, error];
};

export default useMovieListPage;
