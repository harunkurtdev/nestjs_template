import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  new DocumentBuilder().addBearerAuth();
  const options = new DocumentBuilder()
    .setTitle('Greenity API')
    .setDescription('The Greenity API User, Business, Inventory, Departures, Entries, Suppliers, AccountsReceivable, Contributions, AccountsPayable, Roles')
    .setTermsOfService('http://localhost:3046')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  document.servers = [{ url: 'http://localhost:3046/v1/', description: 'Local server' }, { url: 'https://greenity-api.herokuapp.com/v1/', description: 'Heroku server' }];
  SwaggerModule.setup('api', app, document);



  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  app.setGlobalPrefix('v1');

  app.use(helmet());

  app.enableCors({
    origin: 'http://127.0.0.1' + process.env.PORT,
    credentials: true,
  });

  app.use(cookieParser());

  await app.listen(process.env.PORT);
}
bootstrap();
