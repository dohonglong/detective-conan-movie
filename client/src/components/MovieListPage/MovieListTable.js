import React from "react";
import { Link } from "react-router-dom";
import {
  createTheme,
  //Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  Typography,
} from "@mui/material";

const theme = createTheme();
theme.typography.h6 = {
  fontFamily: "monospace",
  fontWeight: 700,
  fontSize: "20px",
  "@media (max-width:550px)": {
    fontSize: "16px",
  },
};

const MovieListTable = ({ movieList }) => {
  const tableHeaderStyle = {
    padding: "10px 0",
    backgroundColor: "#36454F",
    color: "white",
  };

  const linkStyle = {
    color: "blue",
    fontWeight: "bold",
  };
  const tableHeaders = ["Movie", "Title", "Logo", "Airdate"];

  return (
    <Paper elevation={3}>
      {movieList.length > 0 ? (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {tableHeaders.map((header) => (
                  <TableCell
                    align="center"
                    key={header}
                    style={tableHeaderStyle}
                  >
                    <ThemeProvider theme={theme}>
                      <Typography variant="h6" fontWeight="bold">
                        {header}
                      </Typography>
                    </ThemeProvider>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {movieList.map((movie) => (
                <TableRow key={movie.movie_ID}>
                  <TableCell align="center">
                    <Typography variant="body1">{movie._id}</Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="body1">
                      <Link
                        to={`/movie/${movie.movie_ID}`}
                        style={linkStyle}
                        //target="_blank"
                      >
                        {movie.title}
                      </Link>
                    </Typography>
                  </TableCell>
                  <TableCell align="center" sx={{ padding: "10px" }}>
                    <img src={movie.logo} alt="logo" width={100} height={42} />
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1">
                      {movie.release_date}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>Loading movieList... </p>
      )}
    </Paper>
  );
};

export default MovieListTable;
