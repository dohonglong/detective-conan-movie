import React from "react";
import { useParams } from "react-router-dom";
import useCharacterPage from "../../custom-hooks/useCharacterPage";
import CharacterPageTable from "./CharacterPageTable";
import CharacterPageFeatured from "./CharacterPageFeatured";

const Character = () => {
  const character_id = useParams();
  console.log(character_id);
  const [character, loading, error] = useCharacterPage(character_id);

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
