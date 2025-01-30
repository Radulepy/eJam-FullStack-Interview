import axios from 'axios';

const API_URL = 'http://localhost:3000/superheroes'; 

export const fetchSuperheroes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching superheroes:', error);
    return [];
  }
};

export const addSuperhero = async (name: string, superpower: string, humilityScore: number) => {
  try {
    const response = await axios.post(API_URL, {
      name,
      superpower,
      humilityScore,
    });
    return response.data;
  } catch (error) {
    console.error('Error adding superhero:', error);
    return null;
  }
};
