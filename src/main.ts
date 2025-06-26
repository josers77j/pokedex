import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform:true,
      transformOptions:{
        enableImplicitConversion:true,
      }
    }),
  )

  app.setGlobalPrefix('api/v2');

  await app.listen(process.env.PORT!);

  Logger.log(`App running on localhost:${process.env.PORT}`)
}
bootstrap();
