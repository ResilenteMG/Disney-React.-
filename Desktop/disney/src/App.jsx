import { useState, useEffect } from 'react'
import { getAllCharacters } from './services/disneyService' // Importas el servicio
import CharacterCard from './components/CharacterCard'     // Importas la card
import './App.css'

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // Llamamos a la función que creaste en services
    getAllCharacters().then(data => setCharacters(data))
  }, [])

  return (
    <div className="App">
      <h1>Disney API Project</h1>
      <div className="characters-grid">
        {characters.map(char => (
          <CharacterCard key={char._id} character={char} />
        ))}
      </div>
    </div>
  )
}

export default App