import {
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Grid2,
} from "@mui/material";

const MovieSearchAndFilter = ({
  searchInputMovie,
  handleSearchChange,
  filteredType,
  handleTypeChange,
}) => {
  const movieMenuFilters = [
    { types: "", name: "All" },
    { types: "Romance", name: "Movies with romance" },
    { types: "Kaitou_Kid", name: "Movies with Kaitou Kid as main character" },
    { types: "Heiji", name: "Movies with Heiji Hattori as main character" },
    { types: "BO", name: "Movies involve Black Organization" },
    { types: "FBI", name: "Movies involve FBI" },
    { types: "Zero", name: "Movies with Rei Furuya as main character" },
    { types: "Others", name: "Others" },
  ];
  return (
    <Grid2
      container
      spacing={{ xs: 1, md: 2 }}
      style={{ paddingBottom: "15px" }}
    >
      <Grid2 size={{ xs: 8, md: 9 }} justifyContent="flex-start">
        <TextField
          fullWidth
          label="Type name here..."
          variant="filled"
          value={searchInputMovie}
          onChange={handleSearchChange}
          className="search-and-filter"
        />
      </Grid2>
      <Grid2 size={{ xs: 4, md: 3 }} justifyContent="flex-end">
        <FormControl fullWidth variant="filled" className="search-and-filter">
          <InputLabel id="group-filter-label">Filter</InputLabel>
          <Select
            labelId="group-filter-label"
            id="group-filter"
            value={filteredType}
            onChange={handleTypeChange}
            label="Filter"
          >
            {movieMenuFilters.map((filter) => (
              <MenuItem key={filter.types} value={filter.types}>
                {filter.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid2>
    </Grid2>
  );
};

export default MovieSearchAndFilter;
