import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Movie = () => {
  const { movieTitle } = useParams();
  const [movie, setMovie] = useState(null); // Store movie data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    //const ApiURL = process.env.REACT_APP_API_URL;
    const fetchMovie = async () => {
      try {
        // Fetch the movie details by ID from the backend
        const response = await fetch(
          `http://localhost:5000/api/movie/${movieTitle}`
        );
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="movie-container">
      <h1 style={{ textAlign: "center" }}>{movie.title}</h1>
      <p>{movie.overview}</p>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell
                colSpan={2}
                align="center"
                variant="head"
                style={{ fontWeight: "bold" }}
              >
                Movie {movie._id}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} align="center">
                <img src={movie.poster_url} alt="poster" height={500} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                colSpan={2}
                align="center"
                variant="head"
                style={{ fontWeight: "bold" }}
              >
                Information
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">English Title</TableCell>
              <TableCell>{movie.title}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">Japanese Title</TableCell>
              <TableCell>
                {movie.original_title.map((title, index) => (
                  <div key={index}>{title}</div>
                ))}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">Orignial Airdate</TableCell>
              <TableCell>{movie.release_date}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <h3 style={{ textAlign: "center" }}>Cast</h3>

      {movie.characters.map((character, index) => (
        <Link key={index} to={`/character/${character.character_ID}`}>
          <div>{character.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Movie;
