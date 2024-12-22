import React from "react";
import { Card, Grid2, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const MoviePageCast = ({ movie }) => {
  return (
    <Paper elevation={3}>
      <Typography
        variant="h5"
        fontWeight="bold"
        align="center"
        className="header-title-cast"
      >
        Cast
      </Typography>

      <Grid2 container spacing={3} className="character-cast-grid">
        {movie.characters.map((character, index) => (
          <Link key={index} to={`/character/${character.character_ID}`}>
            <Card key={index} elevation={3} className="character-cast-card">
              <img
                src={character.image_url_icon}
                width={100}
                alt="Character icon"
              />
              <Typography className="character-cast-name">
                {character.name}
              </Typography>
            </Card>
          </Link>
        ))}
      </Grid2>
    </Paper>
  );
};

export default MoviePageCast;
