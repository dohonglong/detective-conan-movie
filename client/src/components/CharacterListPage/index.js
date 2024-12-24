import useCharacterListPage from "../../custom-hooks/useCharacterListPage";
import CharacterListTable from "./CharacterListTable";
import Detective_Conan_logo from "../Logo/Detective_Conan_logo.png";

const CharacterList = () => {
  const [characters, loading, error] = useCharacterListPage([]);

  if (loading) {
    return <div>Loading character list. Please wait...</div>;
  }
  if (error) {
    return <p>Something went wrong. Can't load the character page.</p>;
  }
  return (
    <div className="home-container">
      <div className="logo">
        <img
          src={Detective_Conan_logo}
          alt="Conan logo"
          className="responsive-home-logo"
        />
      </div>
      <CharacterListTable characterList={characters} />
    </div>
  );
};

export default CharacterList;
