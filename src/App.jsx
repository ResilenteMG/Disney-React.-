import { useState, useEffect } from 'react';
import { getAllCharacters } from './services/disneyService';
import CharacterCard from './components/CharacterCard';
import './App.css';
import logoDisney from './assets/imag/logo disney.jpg'; // Importación correcta del logo

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
    <div className="main-layout">
      {/* 1. Header con el logo y navegación */}
   <header className="disney-header">
  <div className="header-content">
    <img src={logoDisney} alt="Disney Logo" className="header-logo" />
    <h1 className="header-title">Disney <span>Universe</span></h1>
  </div>
</header>
      {/* 2. Tu cuadrícula de personajes actual */}
      <main className="app-container">
        {characters.map((char) => (
          <CharacterCard key={char._id} character={char} />
        ))}
      </main>

      {/* 3. Footer con tus enlaces profesionales */}
      <footer className="disney-footer">
        <p>&copy; 2026 Disney Explorer - Hecho con 🧡 por Melissa</p>
        <div className="social-links">
          {/* Reemplaza con tus links reales de GitHub y LinkedIn */}
          <a href="https://github.com/ResilenteMG" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className="separator">|</span>
          <a href="https://www.linkedin.com/in/melissa-gomez-b97355384/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;