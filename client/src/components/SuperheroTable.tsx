import React from 'react';

interface Superhero {
  id: number;
  name: string;
  superpower: string;
  humilityScore: number;
}

interface SuperheroTableProps {
  superheroes: Superhero[];
}

const SuperheroTable: React.FC<SuperheroTableProps> = ({ superheroes }) => {
  if (!superheroes || superheroes.length === 0) {
    return <p>No superheroes available.</p>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Superpower</th>
          <th>Humility Score</th>
        </tr>
      </thead>
      <tbody>
        {superheroes.map((superhero) => {
          if (!superhero || !superhero.name) {
            console.error('Invalid superhero data:', superhero);
            return null;
          }
          return (
            <tr key={superhero.id}>
              <td>{superhero.name}</td>
              <td>{superhero.superpower}</td>
              <td>{superhero.humilityScore}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SuperheroTable;
