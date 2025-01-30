import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000; // Default to 3000
  app.enableCors({
    origin: configService.get<number>('CLIENT_URL') || 'http://localhost:3001', // Allow requests from frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow sending cookies
  });
  await app.listen(port);
  console.log(`🚀 Server running at: http://localhost:${port}`);
}
bootstrap();
