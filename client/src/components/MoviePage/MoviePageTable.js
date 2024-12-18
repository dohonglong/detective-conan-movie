import React from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
//import { Link } from "react-router-dom";

const MoviePage = ({ movie }) => {
  const YoutubeURL = "https://www.youtube.com/watch?v=";

  return (
    <Paper elevation={3}>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell colSpan={2} align="center" variant="head">
                <h2>Movie {movie._id}</h2>
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
                style={{ padding: 0 }}
              >
                <h2>Information</h2>
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
            <TableRow>
              <TableCell
                colSpan={2}
                align="center"
                variant="head"
                style={{ padding: 0 }}
              >
                <h2>Music</h2>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell variant="head">Theme Song</TableCell>
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
              <TableCell variant="head">Soundtrack</TableCell>
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
              <TableCell
                colSpan={2}
                align="center"
                variant="head"
                style={{ padding: 0 }}
              >
                <h2>Logo and Trailer</h2>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} align="center">
                <div>
                  <img src={movie.logo} alt="logo" height={150} />
                  <div style={{ padding: 10 }}>
                    <a
                      href={`${YoutubeURL}${movie.trailer}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Official Trailer
                    </a>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default MoviePage;
