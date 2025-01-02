import { Link } from "react-router-dom";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  ThemeProvider,
  Typography,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
// Get this from the movie table list
import { theme } from "../MovieListPage/MovieListTable";
import { useState } from "react";

const CharacterListTable = ({ characterList }) => {
  const tableHeaderStyle = {
    padding: "10px 0",
    backgroundColor: "#36454F",
    color: "white",
  };
  const tableHeaders = [
    { header: "Name", width: "40%" },
    { header: "Gender", width: "20%" },
    { header: "Movies", width: "20%" },
    { header: "Status", width: "20%" },
  ];
  //Table sort
  const [sortBy, setSortBy] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const createSortHandler = (header) => {
    const isAsc = sortBy === header && sortDirection === "asc";
    setSortBy(header);
    setSortDirection(isAsc ? "desc" : "asc");
  };
  const sortedCharacterList = [...characterList].sort((a, b) => {
    if (!sortBy) return 0;
    let valueA, valueB;
    // Special case for movie appearances
    if (sortBy.toLowerCase() === "movies") {
      valueA = a.movies.length;
      valueB = b.movies.length;
    } else {
      valueA = a[sortBy.toLowerCase()];
      valueB = b[sortBy.toLowerCase()];
    }
    if (valueA === valueB) return 0;
    if (sortDirection === "asc") {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA < valueB ? 1 : -1;
    }
  });

  return (
    <Paper elevation={3}>
      {characterList.length > 0 ? (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {tableHeaders.map((header) => {
                  const isSortable = !["Name"].includes(header.header);
                  return (
                    <TableCell
                      align="center"
                      key={header.header}
                      width={header.width}
                      style={tableHeaderStyle}
                    >
                      <ThemeProvider theme={theme}>
                        {isSortable ? (
                          <Box
                            style={{
                              position: "relative",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <TableSortLabel
                              active={sortBy === header.header}
                              direction={sortDirection}
                              onClick={() => createSortHandler(header.header)}
                              sx={{
                                "& .MuiTableSortLabel-icon": {
                                  position: "absolute",
                                  right: -20,
                                  color: "white !important",
                                },
                              }}
                            >
                              <Typography
                                variant="h6"
                                fontWeight="bold"
                                color="white"
                              >
                                {header.header}
                              </Typography>
                            </TableSortLabel>
                          </Box>
                        ) : (
                          <Typography variant="h6" fontWeight="bold">
                            {header.header}
                          </Typography>
                        )}
                      </ThemeProvider>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedCharacterList.map((character) => (
                <TableRow key={character.character_ID}>
                  <TableCell align="left">
                    <Typography variant="body1">
                      <Link
                        to={`/character/${character.character_ID}`}
                        className="character-table-link"
                      >
                        <img
                          src={character.image_url_icon}
                          width={50}
                          alt="Character Icon"
                          className="character-table-icon"
                        />
                        {character.name}
                      </Link>
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography
                      variant="body1"
                      className="character-gender-status"
                    >
                      {character.gender === "Male" ? (
                        <>
                          <MaleIcon color="primary" /> {character.gender}
                        </>
                      ) : (
                        <>
                          <FemaleIcon style={{ color: "#FF00FF" }} />
                          {character.gender}
                        </>
                      )}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1">
                      {character.movies.length}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography
                      variant="body1"
                      className="character-gender-status"
                    >
                      <CircleIcon
                        style={{
                          color:
                            character.status === "Alive"
                              ? "#6EC531"
                              : character.status === "Dead"
                              ? "red"
                              : "inherit",
                        }}
                      />
                      {character.status}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h2> No character matches your input. Please try again. </h2>
      )}
    </Paper>
  );
};

export default CharacterListTable;
