import axios from 'axios';

const API_URL = 'https://api.disneyapi.dev/character';

// Cambia getCharacters por getAllCharacters
export const getAllCharacters = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data; // La API de Disney devuelve los personajes en .data
  } catch (error) {
    console.error("Error fetching Disney characters:", error);
    throw error;
  }
};