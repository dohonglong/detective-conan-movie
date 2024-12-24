import { Link } from "react-router-dom";
import {
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

// Get this from the movie table list
import { theme } from "../MovieListPage/MovieListTable";
import { useState } from "react";

const CharacterListTable = ({ characterList }) => {
  const tableHeaderStyle = {
    padding: "10px 0",
    backgroundColor: "#36454F",
    color: "white",
  };

  const linkStyle = {
    color: "blue",
    fontWeight: "bold",
  };
  const statusStyle = {
    display: "flex",
    alignItems: "center",
    gap: 5,
  };
  const tableHeaders = [
    { header: " " },
    { header: "Name" },
    { header: "Aliases", width: "20%" },
    { header: "Gender", width: "10%" },
    { header: "Nationality", width: "10%" },
    { header: "Status", width: "10%" },
    { header: "Groups", width: "15%" },
    { header: "Appearances", width: "10%" },
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

    const valueA = a[sortBy.toLowerCase()];
    const valueB = b[sortBy.toLowerCase()];

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
                {/* Colspan Cell */}
                <TableCell
                  align="center"
                  colSpan={2}
                  style={{ ...tableHeaderStyle, width: "25%" }}
                >
                  <ThemeProvider theme={theme}>
                    <Typography variant="h6" fontWeight="bold">
                      Name
                    </Typography>
                  </ThemeProvider>
                </TableCell>
                {/* Remaining headers */}
                {tableHeaders.slice(2).map((header) => {
                  const isSortable = !["Aliases", "Groups"].includes(
                    header.header
                  );
                  return (
                    <TableCell
                      align="center"
                      key={header.header}
                      width={header.width}
                      style={tableHeaderStyle}
                    >
                      <ThemeProvider theme={theme}>
                        {isSortable ? (
                          <TableSortLabel
                            active={sortBy === header.header}
                            direction={sortDirection}
                            onClick={() => createSortHandler(header.header)}
                            sx={{
                              color: "white !important",
                              "& .MuiTableSortLabel-icon": {
                                color: "white !important",
                              },
                            }}
                          >
                            <Typography variant="h6" fontWeight="bold">
                              {header.header}
                            </Typography>
                          </TableSortLabel>
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
                  <TableCell align="center">
                    <Typography variant="body1">
                      <Link
                        to={`/character/${character.character_ID}`}
                        style={linkStyle}
                      >
                        <img
                          src={character.image_url_icon}
                          width={60}
                          alt="Character Icon"
                        />
                      </Link>
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="body1">
                      <Link
                        to={`/character/${character.character_ID}`}
                        style={linkStyle}
                      >
                        {character.name}
                      </Link>
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    {character.aliases.map((alias) => (
                      <Typography variant="body1" key={alias}>
                        {alias}
                      </Typography>
                    ))}
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1">{character.gender}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1">
                      {character.nationality}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    {character.status === "Alive" ? (
                      <Typography variant="body1" style={statusStyle}>
                        <CircleIcon style={{ color: "#6EC531" }} />
                        {character.status}
                      </Typography>
                    ) : character.status === "Dead" ? (
                      <Typography variant="body1" style={statusStyle}>
                        <CircleIcon style={{ color: "red" }} />
                        {character.status}
                      </Typography>
                    ) : (
                      <Typography variant="body1" style={statusStyle}>
                        <CircleIcon />
                        {character.status}
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell align="left">
                    {character.groups.map((group) => (
                      <Typography variant="body1" key={group}>
                        {group}
                      </Typography>
                    ))}
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="body1">
                      {character.movies.length} movies
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h2> Loading character list... </h2>
      )}
    </Paper>
  );
};

export default CharacterListTable;
