import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { SuperheroService } from './superheroes.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

interface Superhero {
    id: number;
    name: string;
    superpower: string;
    humilityScore: number;
}

@Controller('superheroes') // Defines the API route: /superheroes
export class SuperheroesController {
    constructor(private readonly superheroService: SuperheroService) { }

    @Post() // Handles POST requests to /superheroes
    @UsePipes(new ValidationPipe()) // enable validation
    createSuperhero(
        @Body() createSuperheroDto: CreateSuperheroDto,
    ): Superhero {
        console.log('Received request:', createSuperheroDto); // <-- Debugging logs
        return this.superheroService.createSuperhero(createSuperheroDto.name, createSuperheroDto.superpower, createSuperheroDto.humilityScore);
    }

    @Get() // Handles GET requests to /superheroes
    getSuperheroes(): Superhero[] {
        return this.superheroService.getSuperheroes();
    }
}
