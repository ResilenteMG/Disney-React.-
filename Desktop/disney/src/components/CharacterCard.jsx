import React from 'react';
import logoDisney from '../assets/imag/logo disney.jpg'; 

const CharacterCard = ({ character }) => {
  const fallbackImage = logoDisney;

  const handleError = (e) => {
    // Si la imagen falla al cargar después del primer intento, ponemos el logo
    e.target.onerror = null; 
    e.target.src = fallbackImage;
  };

  // Esta función decide qué URL mostrar
  const getImageUrl = () => {
    // Si no hay URL, o es muy corta, o es la de Baby Panda que sabemos que falla
    if (!character.imageUrl || character.imageUrl.length < 20 || character.name === "Baby Panda") {
      return fallbackImage;
    }
    return character.imageUrl;
  };

  return (
    <div className="card-item">
      <img 
        src={getImageUrl()} 
        alt={character.name} 
        onError={handleError} 
      />
      <h3>{character.name}</h3>
      <p>Películas: {character.films?.length > 0 ? character.films[0] : 'N/A'}</p>
    </div>
  );
};

export default CharacterCard;

