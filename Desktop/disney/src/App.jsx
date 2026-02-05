import { useState, useEffect } from 'react';
import { getAllCharacters } from './services/disneyService';
import CharacterCard from './components/CharacterCard';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Definimos la función asíncrona dentro del efecto
    const fetchDisneyData = async () => {
      const data = await getAllCharacters();
      setCharacters(data);
    };

    fetchDisneyData();
  }, []);

  return (
    <div className="app-container">
      <h1>Disney Universe</h1>
      <div className="character-grid">
        {characters.map((char) => (
          <CharacterCard key={char._id} character={char} />
        ))}
      </div>
    </div>
  );
}

export default App;