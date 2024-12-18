import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useMoviePage = () => {
  const { movieTitle } = useParams([]);
  const [movie, setMovie] = useState(null); // Store movie data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const ApiURL = process.env.REACT_APP_API_URL;
    const fetchMovie = async () => {
      try {
        // Fetch the movie details by ID from the backend
        const response = await fetch(`${ApiURL}/api/movie/${movieTitle}`);
        if (!response.ok) {
          throw new Error("Failed to fetch movie");
        }
        const data = await response.json();
        //console.log(data);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieTitle]);

  return [movie, loading, error];
};

export default useMoviePage;
