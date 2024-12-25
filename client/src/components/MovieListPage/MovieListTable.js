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

// MAKE THE THEME GLOBAL
export const theme = createTheme();
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
  const tableHeaders = [
    { header: "Movie", width: "10%" },
    { header: "Title", width: "40%" },
    { header: "Logo", width: "30%" },
    { header: "Airdate", width: "20%" },
  ];

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
                    key={header.header}
                    width={header.width}
                    style={tableHeaderStyle}
                  >
                    <ThemeProvider theme={theme}>
                      <Typography variant="h6" fontWeight="bold">
                        {header.header}
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
                      <Link to={`/movie/${movie.movie_ID}`} style={linkStyle}>
                        {movie.title}
                      </Link>
                    </Typography>
                  </TableCell>
                  <TableCell align="center" sx={{ padding: "10px" }}>
                    <Link to={`/movie/${movie.movie_ID}`}>
                      <img
                        src={movie.logo}
                        alt="logo"
                        width={100}
                        height={42}
                      />
                    </Link>
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
