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
import { styled } from "@mui/material/styles";

const MoviePage = ({ movie }) => {
  const YoutubeURL = "https://www.youtube.com/watch?v=";
  /* HEADER CELL + COLUMN */
  const HeaderCell = styled(TableCell)(() => ({
    padding: 0,
    backgroundColor: "#0039a6",
  }));
  const HeaderColumn = styled(TableCell)(() => ({
    fontWeight: "bold",
  }));

  return (
    <Paper elevation={3}>
      <TableContainer>
        <Table>
          <TableBody>
            {/* POSTER + DESCRIPTION */}
            <TableRow>
              <HeaderCell colSpan={2} variant="head" align="center">
                <h1 className="header-title-text">{movie.title}</h1>
              </HeaderCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} align="center">
                <img
                  src={movie.poster_url}
                  alt="poster"
                  className="responsive-poster"
                />
                <Typography variant="body1" className="description-text">
                  {movie.overview}
                </Typography>
              </TableCell>
            </TableRow>
            {/* INFORMATION PART */}
            <TableRow>
              <HeaderCell colSpan={2} variant="head" align="center">
                <h2 className="header-text">Information</h2>
              </HeaderCell>
            </TableRow>
            <TableRow>
              <HeaderColumn variant="head">English Title</HeaderColumn>
              <TableCell>{movie.title}</TableCell>
            </TableRow>
            <TableRow>
              <HeaderColumn variant="head">Japanese Title</HeaderColumn>
              <TableCell>
                {movie.original_title.map((title, index) => (
                  <div key={index}>{title}</div>
                ))}
              </TableCell>
            </TableRow>
            <TableRow>
              <HeaderColumn variant="head">Release Date</HeaderColumn>
              <TableCell>{movie.release_date}</TableCell>
            </TableRow>
            <TableRow>
              <HeaderColumn variant="head">Running Time</HeaderColumn>
              <TableCell>{movie.running_time}</TableCell>
            </TableRow>
            <TableRow>
              <HeaderColumn variant="head">Country</HeaderColumn>
              <TableCell>{movie.country}</TableCell>
            </TableRow>
            <TableRow>
              <HeaderColumn variant="head">Language</HeaderColumn>
              <TableCell>{movie.original_language}</TableCell>
            </TableRow>
            {/* MEDIA PART */}
            <TableRow>
              <HeaderCell colSpan={2} variant="head" align="center">
                <h2 className="header-text">Media</h2>
              </HeaderCell>
            </TableRow>
            <TableRow>
              <HeaderColumn variant="head">Theme Song</HeaderColumn>
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
              <HeaderColumn variant="head">Soundtrack</HeaderColumn>
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
              <HeaderColumn variant="head">Trailer</HeaderColumn>
              <TableCell>
                <a
                  href={`${YoutubeURL}${movie.trailer}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Detective Conan: {movie.title} - Trailer
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default MoviePage;
