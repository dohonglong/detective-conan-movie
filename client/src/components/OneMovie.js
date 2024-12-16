import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const OneMovie = () => {
  const { id } = useParams();
  //   const ID = parseInt(id);
  //   const id = 5;
  const [movie, setMovie] = useState(null); // Store movie data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        // Fetch the movie details by ID from the backend
        const response = await fetch(`http://localhost:5000/api/movie/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch movie");
        }
        const data = await response.json();
        //console.log("HELLO");
        console.log(data);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

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
                Movie {movie.movie}
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
              <TableCell>{movie.original_title}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">Orignial Airdate</TableCell>
              <TableCell>{movie.release_date}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                colSpan={2}
                align="center"
                variant="head"
                style={{ fontWeight: "bold" }}
              >
                Case
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">Cast</TableCell>
              <TableCell>
                {movie.characters.map((character, index) => (
                  <div key={index}>{character}</div>
                ))}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <ul>
        {/* {movie.characters.map((character, index) => (
          <li key={index}>{character}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default OneMovie;
