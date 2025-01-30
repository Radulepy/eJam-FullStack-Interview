import { Injectable } from '@nestjs/common';

interface Superhero {
  id: number;
  name: string;
  superpower: string;
  humilityScore: number;
}

@Injectable()
export class SuperheroService {
  private superheroes: Superhero[] = [];
  private idCounter = 1;

  createSuperhero(name: string, superpower: string, humilityScore: number): Superhero {
    const newSuperhero: Superhero = {
      id: this.idCounter++,
      name,
      superpower,
      humilityScore,
    };
    this.superheroes.push(newSuperhero);
    return newSuperhero;
  }

  getSuperheroes(): Superhero[] { // sorted by humility score
    return this.superheroes.sort((a, b) => a.humilityScore - b.humilityScore);
  }
}
