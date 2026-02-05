import { useState, useEffect } from 'react';
import { getAllCharacters } from './services/disneyService';
import CharacterCard from './components/CharacterCard';
import './App.css'; 

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchDisneyData = async () => {
      const data = await getAllCharacters();
      setCharacters(data);
    };
    fetchDisneyData();
  }, []);

  return (
    <div className="app-container">
      {characters.map((char) => (
        <CharacterCard key={char._id} character={char} />
      ))}
    </div>
  );
}

export default App;