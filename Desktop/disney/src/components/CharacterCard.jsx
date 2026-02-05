// Añade esto arriba de tu función CharacterCard en image_881bda.jpg
import logoDisney from '../assets/imag/logo disney.jpg'; 

const CharacterCard = ({ character }) => {
  const fallbackImage = logoDisney; // Aquí le decimos que use tu logo local
  
  const handleError = (e) => {
    e.target.src = fallbackImage;
  };

  // ... resto de tu lógica que ya tienes bien

  // Esta línea es la clave: 
  // Si la imagen es la de "Baby Panda" o "Apaches" que ya sabemos que están rotas,
  // ponemos el logo de entrada. Si no, intentamos cargar la de la API.
  const initialImage = (character.name === "Baby Panda" || character.name === "Apaches") 
    ? fallbackImage 
    : (character.imageUrl || fallbackImage);

  return (
    <div className="card-item">
      <img 
        src={initialImage} 
        alt={character.name} 
        onError={handleError} 
      />
      <h3>{character.name}</h3>
      <p>Películas: {character.films?.length > 0 ? character.films[0] : 'N/A'}</p>
    </div>
  );
};

export default CharacterCard;