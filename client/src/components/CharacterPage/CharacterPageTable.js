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
// IMPORT HEADER CELL AND COLUMN FROM THE MOVIE PAGE FILE
import { HeaderCell, HeaderColumn } from "../MoviePage/MoviePageTable";

const CharacterPage = ({ character }) => {
  return (
    <Paper elevation={3}>
      <TableContainer>
        <Table>
          <TableBody>
            {/* POSTER + DESCRIPTION */}
            <TableRow>
              <HeaderCell colSpan={2} variant="head" align="center">
                <h1 className="header-title-character">{character.name}</h1>
              </HeaderCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2} align="center">
                <img
                  src={character.image_url_big}
                  alt="poster"
                  className="responsive-character-poster"
                />
                <Typography variant="body1" className="description-text">
                  {character.description}
                </Typography>
              </TableCell>
            </TableRow>
            {/* PROFILE PART */}
            <TableRow>
              <HeaderCell colSpan={2} variant="head" align="center">
                <h2 className="header-text">Profile</h2>
              </HeaderCell>
            </TableRow>
            <TableRow>
              <HeaderColumn variant="head">Name</HeaderColumn>
              <TableCell>{character.name}</TableCell>
            </TableRow>
            <TableRow>
              <HeaderColumn variant="head">Japanese Name</HeaderColumn>
              <TableCell>
                {character.original_name.map((name, index) => (
                  <div key={index}>{name}</div>
                ))}
              </TableCell>
            </TableRow>
            <TableRow>
              <HeaderColumn variant="head">Aliases</HeaderColumn>
              <TableCell>
                {character.aliases.map((alias, index) => (
                  <div key={index}>{alias}</div>
                ))}
              </TableCell>
            </TableRow>
            <TableRow>
              <HeaderColumn variant="head">Age</HeaderColumn>
              <TableCell>{character.age}</TableCell>
            </TableRow>
            <TableRow>
              <HeaderColumn variant="head">Gender</HeaderColumn>
              <TableCell>{character.gender}</TableCell>
            </TableRow>
            <TableRow>
              <HeaderColumn variant="head">Height</HeaderColumn>
              <TableCell>{character.height}</TableCell>
            </TableRow>
            <TableRow>
              <HeaderColumn variant="head">Weight</HeaderColumn>
              <TableCell>{character.weight}</TableCell>
            </TableRow>
            <TableRow>
              <HeaderColumn variant="head">Date of Birth</HeaderColumn>
              <TableCell>{character.date_of_birth}</TableCell>
            </TableRow>
            <TableRow>
              <HeaderColumn variant="head">Nationality</HeaderColumn>
              <TableCell>{character.nationality}</TableCell>
            </TableRow>
            <TableRow>
              <HeaderColumn variant="head">Occupations</HeaderColumn>
              <TableCell>
                {character.occupations.map((occupation, index) => (
                  <div key={index}>{occupation}</div>
                ))}
              </TableCell>
            </TableRow>
            <TableRow>
              <HeaderColumn variant="head">Groups</HeaderColumn>
              <TableCell>
                {character.groups.map((group, index) => (
                  <div key={index}>{group}</div>
                ))}
              </TableCell>
            </TableRow>

            <TableRow>
              <HeaderColumn variant="head">Status</HeaderColumn>
              <TableCell>{character.status}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default CharacterPage;
