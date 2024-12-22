import React from "react";

import useCharacterPage from "../../custom-hooks/useCharacterPage";
import CharacterPageTable from "./CharacterPageTable";
import CharacterPageFeatured from "./CharacterPageFeatured";

const Character = () => {
  const [character, loading, error] = useCharacterPage([]);

  if (loading) {
    return <div>Loading character info...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="character-container">
      <CharacterPageTable character={character} />

      <CharacterPageFeatured character={character} />
    </div>
  );
};

export default Character;
