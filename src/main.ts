import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WINSTON_MODULE_NEST_PROVIDER, WinstonModule } from 'nest-winston';
import { LoggerConfig } from './config';
import { HttpExceptionFilter } from './api/exceptions/http-exceptions.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { dotEnvOptions } from './api/utils/dotenv-options';
import { ValidationPipe } from '@nestjs/common';
declare const module: any;

async function bootstrap() {
  const config = dotenv.parse(fs.readFileSync(dotEnvOptions.path));
  const logger: LoggerConfig = new LoggerConfig();
  
  const configSwagger = new DocumentBuilder()
    .setTitle(process.env.SWAGGER_NAME || config['SWAGGER_NAME'])
    .setDescription(process.env.SWAGGER_DESCRIPTION || config['SWAGGER_DESCRIPTION'])
    .setVersion(process.env.SWAGGER_VERSION || config['SWAGGER_VERSION'])
    .setContact(process.env.SWAGGER_CONTACT_NAME || config['SWAGGER_CONTACT_NAME'], "",
      process.env.SWAGGER_CONTACT_EMAIL ||
      config['SWAGGER_CONTACT_EMAIL'])
    .build();

  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(logger.console()),
  });
  if (process.env.NODE_ENV || config['NODE_ENV'] !== 'production') {
    const document = SwaggerModule.createDocument(app, configSwagger);
    SwaggerModule.setup('api', app, document);
  }
  app.useGlobalFilters(new HttpExceptionFilter);
  app.useGlobalPipes(new ValidationPipe());
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  await app.listen(process.env.PORT || config['PORT']);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close())
  }
}

bootstrap();
