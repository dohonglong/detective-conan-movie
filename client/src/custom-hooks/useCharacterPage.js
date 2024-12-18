import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useCharacterPage = () => {
  const { characterName } = useParams();
  const [character, setCharacter] = useState(null); // Store movie data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const ApiURL = process.env.REACT_APP_API_URL;
    const fetchCharacter = async () => {
      try {
        // Fetch the character details by ID from the backend
        const response = await fetch(
          `${ApiURL}/api/character/${characterName}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch character");
        }
        const data = await response.json();
        //console.log(data);
        setCharacter(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacter();
  }, [characterName]);

  return [character, loading, error];
};

export default useCharacterPage;
