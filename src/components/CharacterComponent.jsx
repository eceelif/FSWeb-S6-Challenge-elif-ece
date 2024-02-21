import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterObj from "./fetchData";

const CharacterComponent = () => {
  const [characterData, setCharacterData] = useState({});
  const { characterName } = useParams(); // Updated to use characterName directly

  const fetchData = async () => {
    try {
      const data = await CharacterObj.GetCharacterByName(characterName);
      setCharacterData(data.results[0]); // Assuming the first character is unique
    } catch (error) {
      console.error("Error fetching character data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [characterName]);

  if (!characterData || !characterData.name) {
    return <div>Loading...</div>;
  }

  const { name, height, mass, hair_color, eye_color, skin_color, birth_year, gender, homeworld, films, species, vehicles, starships } = characterData;

  return (
    <div className="container">
      <h1>Deneme Başlığı</h1>
      <div className="Name">{name}</div>
      {/* ... (other character properties) */}
    </div>
  );
};

export default CharacterComponent;