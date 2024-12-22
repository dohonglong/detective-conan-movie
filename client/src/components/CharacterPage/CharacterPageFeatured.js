import { Grid2, Paper, Typography, Card } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CharacterPageFeatured = ({ character }) => {
  return (
    <Paper elevation={3}>
      <Typography
        variant="h5"
        fontWeight="bold"
        align="center"
        className="header-movie-featured"
      >
        Movie Appearances
      </Typography>

      <Grid2 container spacing={3} className="movie-featured-grid">
        {character.movies.map((movie, index) => (
          <Link key={index} to={`/movie/${movie.movie_ID}`}>
            <Card key={index} elevation={3} className="movie-featured-card">
              <img
                src={movie.poster_url}
                width={250}
                alt="Movie featured poster"
              />
              <Typography className="movie-featured-name">
                {movie.title}
              </Typography>
            </Card>
          </Link>
        ))}
      </Grid2>
    </Paper>
  );
};

export default CharacterPageFeatured;
