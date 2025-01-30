import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { SuperheroesModule } from './superheroes/superheroes.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }),
    SuperheroesModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
