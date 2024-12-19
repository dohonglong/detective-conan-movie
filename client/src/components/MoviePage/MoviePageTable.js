import React from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
} from "@mui/material";
//import { Link } from "react-router-dom";

const MoviePage = ({ movie }) => {
  const YoutubeURL = "https://www.youtube.com/watch?v=";
  const headerRow = {
    padding: 0,
    backgroundColor: "#0039a6",
  };
  const headerTitleText = {
    color: "white",
    lineHeight: 1.5,
  };
  const headerText = {
    color: "white",
  };
  const descriptionText = {
    fontSize: "18px",
    padding: "15px 0",
    textAlign: "justify",
    fontStyle: "italic",
    //fontWeight: "italic",
  };
  return (
    <Paper elevation={3}>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell
                colSpan={2}
                align="center"
                variant="head"
                style={headerRow}
              >
                <h1 style={headerTitleText}>{movie.title}</h1>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} align="center">
                <img
                  src={movie.poster_url}
                  alt="poster"
                  className="responsive-poster"
                />
                <Typography variant="body1" style={descriptionText}>
                  {movie.overview}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                colSpan={2}
                align="center"
                variant="head"
                style={headerRow}
              >
                <h2 style={headerText}>Information</h2>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head" style={{ fontWeight: "bold" }}>
                English Title
              </TableCell>
              <TableCell>{movie.title}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head" style={{ fontWeight: "bold" }}>
                Japanese Title
              </TableCell>
              <TableCell>
                {movie.original_title.map((title, index) => (
                  <div key={index}>{title}</div>
                ))}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head" style={{ fontWeight: "bold" }}>
                Release Date
              </TableCell>
              <TableCell>{movie.release_date}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head" style={{ fontWeight: "bold" }}>
                Running Time
              </TableCell>
              <TableCell>{movie.running_time}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head" style={{ fontWeight: "bold" }}>
                Country
              </TableCell>
              <TableCell>{movie.country}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head" style={{ fontWeight: "bold" }}>
                Language
              </TableCell>
              <TableCell>{movie.original_language}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                colSpan={2}
                align="center"
                variant="head"
                style={headerRow}
              >
                <h2 style={headerText}>Media</h2>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head" style={{ fontWeight: "bold" }}>
                Theme Song
              </TableCell>
              <TableCell>
                <a
                  href={`${YoutubeURL}${movie.theme_song.link_code}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {movie.theme_song.song}
                </a>{" "}
                by {movie.theme_song.artist}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head" style={{ fontWeight: "bold" }}>
                Soundtrack
              </TableCell>
              <TableCell>
                <a
                  href={`${YoutubeURL}${movie.soundtrack}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Detective Conan - Movie Opening Theme
                </a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head" style={{ fontWeight: "bold" }}>
                Trailer
              </TableCell>
              <TableCell>
                <a
                  href={`${YoutubeURL}${movie.trailer}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official Trailer
                </a>
              </TableCell>
            </TableRow>
            <TableRow></TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default MoviePage;
