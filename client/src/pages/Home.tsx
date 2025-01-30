import React, { useState, useEffect } from 'react';
import SuperheroForm from '../components/SuperheroForm';
import SuperheroTable from '../components/SuperheroTable';
import { addSuperhero, fetchSuperheroes } from '../services/superheroService';

const Home: React.FC = () => {
  const [superheroes, setSuperheroes] = useState<any[]>([]);

  // Fetch superheroes from the API
  const fetchData = async () => {
    try {
      const data: any[] = await fetchSuperheroes() as any[];
      setSuperheroes(data);
    } catch (error) {
      console.error('Error fetching superheroes:', error);
    }
  };

  // Handle adding a new superhero
  const handleAddSuperhero = async (name: string, superpower: string, humilityScore: number) => {
    try {
      await addSuperhero(name, superpower, humilityScore);  // Add superhero via API
      fetchData();  // Refetch superheroes list after adding
    } catch (error) {
      console.error('Error adding superhero:', error);
    }
  };

  // Fetch superheroes when component mounts
  useEffect(() => {
    fetchData();
  }, []);  // Empty dependency array to only fetch once on mount

  return (
    <div className="container mt-4">
      <h1>Superhero Dashboard</h1>
      <SuperheroForm onSubmit={handleAddSuperhero} />
      <hr />
      <SuperheroTable superheroes={superheroes} />
    </div>
  );
};

export default Home;