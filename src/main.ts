import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');

  app.use(helmet());
  // app.use(helmet({
  //   contentSecurityPolicy: process.env.NODE_ENV === 'production' ? undefined : false,
  // }));

  app.enableCors({
    // origin: 'https://tudominio.com', // Permitir solo este dominio
    origin: '*', // Permitir solicitudes desde cualquier dominio (en desarrollo)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
    credentials: true, // Habilitar cookies
  });

  const config = new DocumentBuilder()
    .setTitle('Apertura de Cuentas Títulos')
    .setDescription('API para manejar apertura de cuentas y encuestas ENRI')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = process.env.PORT || 5000;
  await app.listen(port, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
