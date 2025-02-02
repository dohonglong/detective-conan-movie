import {
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Grid2,
  Divider,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

const CharacterSearchAndFilter = ({
  searchInputCharacter,
  handleSearchChange,
  filteredType,
  handleTypeChange,
}) => {
  const characterMenuFilters = [
    { types: "Protagonists", name: "Protagonists" },
    { types: "Detective_Boys", name: "Detective Boys" },
    { types: "Family_Friends", name: "Family & Friends" },
    { types: "Kaitou_Kid", name: "Kaitou Kid" },
    { types: "Black_Organization", name: "Black Organization" },
    { types: "Law_Enforcement", name: "Law Enforcement" },
    { types: "Tokyo_Police", name: "Tokyo Police" },
    { types: "Osaka_Police", name: "Osaka Police" },
    { types: "Nagano_Police", name: "Nagano Police" },
    { types: "FBI", name: "FBI" },
    { types: "NPA_PSB", name: "NPA & PSB" },
    { types: "F5", name: "Police Academy" },
    { types: "Celebrity", name: "Celebrity" },
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
          value={searchInputCharacter}
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
            <MenuItem value="">All</MenuItem>
            <Divider />
            <MenuItem className="character-gender-status" value="Male">
              Male <MaleIcon color="primary" />
            </MenuItem>
            <MenuItem className="character-gender-status" value="Female">
              Female <FemaleIcon style={{ color: "#FF00FF" }} />
            </MenuItem>
            <Divider />
            {characterMenuFilters.map((filter) => (
              <MenuItem key={filter.types} value={filter.types}>
                {filter.name}
              </MenuItem>
            ))}
            <Divider />
            <MenuItem className="character-gender-status" value="Alive">
              Alive <CircleIcon style={{ color: "#6EC531" }} />
            </MenuItem>
            <MenuItem className="character-gender-status" value="Dead">
              Dead <CircleIcon style={{ color: "red" }} />
            </MenuItem>
          </Select>
        </FormControl>
      </Grid2>
    </Grid2>
  );
};

export default CharacterSearchAndFilter;
