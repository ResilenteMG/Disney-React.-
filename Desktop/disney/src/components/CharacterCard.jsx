// src/components/CharacterCard.jsx
import React from 'react'

const CharacterCard = ({ character }) => {
  return (
    <div className="card-item">
      <img src={character.imageUrl} alt={character.name} />
      <h3>{character.name}</h3>
      {/* Esto ayuda a que si no tiene películas, no rompa la app */}
      <p>Películas: {character.films?.length > 0 ? character.films[0] : 'N/A'}</p>
    </div>
  )
}

export default CharacterCard