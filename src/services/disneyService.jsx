import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.disneyapi.dev'
});

// ASEGÚRATE DE QUE SE LLAME ASÍ:
export const getAllCharacters = async () => {
  try {
    const response = await api.get('/character');
    return response.data.data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};