import React, { useState } from 'react';

interface SuperheroFormProps {
  onSubmit: (name: string, superpower: string, humilityScore: number) => void;
}

const SuperheroForm: React.FC<SuperheroFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [humilityScore, setHumilityScore] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name, superpower, humilityScore); // Call the parent function
    setName('');  // Reset fields
    setSuperpower('');
    setHumilityScore(1);
  };

  const handleHumilityScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(10, Math.max(1, Number(e.target.value)));  // Ensure humility score is between 1 and 10
    setHumilityScore(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="superpower" className="form-label">Superpower</label>
        <input
          type="text"
          className="form-control"
          id="superpower"
          value={superpower}
          onChange={(e) => setSuperpower(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="humilityScore" className="form-label">Humility Score</label>
        <input
          type="number"
          className="form-control"
          id="humilityScore"
          value={humilityScore}
          min="1"
          max="10"
          onChange={handleHumilityScoreChange}  // Update humility score within the range of 1 to 10
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Superhero</button>
    </form>
  );
};

export default SuperheroForm;
