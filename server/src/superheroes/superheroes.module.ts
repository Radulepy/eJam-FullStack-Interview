import { Module } from '@nestjs/common';
import { SuperheroService } from './superheroes.service';
import { SuperheroesController } from './superheroes.controller';

@Module({
  providers: [SuperheroService],
  controllers: [SuperheroesController]
})
export class SuperheroesModule {}
