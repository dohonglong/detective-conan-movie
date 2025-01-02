import { useState } from "react";
import useCharacterListPage from "../../custom-hooks/useCharacterListPage";
import CharacterSearchAndFilter from "./CharacterSearchAndFilter";
import CharacterListTable from "./CharacterListTable";
import Detective_Conan_logo from "../Logo/Detective_Conan_logo.png";

const CharacterList = () => {
  const [characters, loading, error] = useCharacterListPage([]);
  const [searchInputCharacter, setSearchInputCharacter] = useState("");
  const [filteredType, setFilterType] = useState("");

  if (loading) {
    return <div>Loading character list. Please wait...</div>;
  }
  if (error) {
    return <p>Something went wrong. Can't load the character page.</p>;
  }

  /* For the search field */
  const handleSearchChange = (event) => {
    event.preventDefault();
    setSearchInputCharacter(event.target.value);
  };
  /* For the type filter */
  const handleTypeChange = (event) => {
    setFilterType(event.target.value);
  };
  const filteredCharacters = characters.filter((character) => {
    /* For the search field */
    const matchesName = character.name
      .toLowerCase()
      .includes(searchInputCharacter.toLowerCase());
    const matchesAlias = character.aliases.some((alias) =>
      alias.toLowerCase().includes(searchInputCharacter.toLowerCase())
    );
    /* For the type filter */
    const matchesType =
      filteredType === "" ||
      (character.types && character.types.includes(filteredType));
    const matchesGender =
      filteredType === "" ||
      (character.gender && character.gender.includes(filteredType));
    const matchesStatus =
      filteredType === "" ||
      (character.status && character.status.includes(filteredType));
    return (
      (matchesName || matchesAlias) &&
      (matchesType || matchesStatus || matchesGender)
    );
  });

  return (
    <div className="home-character-container">
      <div className="logo">
        <img
          src={Detective_Conan_logo}
          alt="Conan logo"
          className="responsive-home-logo"
        />
      </div>
      <CharacterSearchAndFilter
        setSearchInputCharacter={searchInputCharacter}
        handleSearchChange={handleSearchChange}
        filteredType={filteredType}
        handleTypeChange={handleTypeChange}
      />
      <CharacterListTable characterList={filteredCharacters} />
    </div>
  );
};

export default CharacterList;
