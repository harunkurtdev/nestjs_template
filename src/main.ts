import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  new DocumentBuilder().addBearerAuth();
  const options = new DocumentBuilder()
    .setTitle('Greenity User API')
    .setDescription('Greenity User API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  document.servers = [{ url: 'http://localhost:3000', description: 'Local server' }];
  SwaggerModule.setup('api', app, document);


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
