import { useEffect, useState } from "react";

const useCharacterListPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ApiURL = process.env.REACT_APP_API_URL;
    const url = `${ApiURL}/api/characters`;
    const fetchCharacters = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);
  return [characters, loading, error];
};

export default useCharacterListPage;
