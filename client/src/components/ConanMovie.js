import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ConanMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const ApiURL = process.env.REACT_APP_API_URL;
    const url = `${ApiURL}/api/movies`;
    const fetchMovies = async () => {
      try {
        const response = await fetch(url);
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
    <div className="home-container">
      <h1>Conan Movie</h1>

      {movies.length > 0 ? (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Movie</TableCell>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Airdate</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movies.map((movie) => (
                <TableRow key={movie.movie}>
                  <TableCell align="center">{movie.movie}</TableCell>
                  <TableCell>
                    <Link
                      to={`/movie/${movie.movie}`}
                      target="_blank"
                      // rel="noopener noreferrer"
                    >
                      {movie.title}
                    </Link>
                  </TableCell>
                  <TableCell>{movie.release_date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>Loading movies... </p>
      )}
    </div>
  );
};

export default ConanMovie;
