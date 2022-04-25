import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AprobadoService, TasaService, SimuladorService, DesembolsoService } from './api/services';
import { AprobadoController, TasaController, SimuladorController, DesembolsoController } from './api/controller';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { HttpConfig, LoggerConfig, } from './config';
import { LoggerMiddleware } from './api/middleware';
import { HttpModule } from '@nestjs/axios';


const logger: LoggerConfig = new LoggerConfig();
const http: HttpConfig = new HttpConfig();
@Module({
  imports: [
    ConfigModule.forRoot(),
    WinstonModule.forRoot(logger.console()),
    HttpModule.register(http.getOptions()),

  ],
  controllers: [AprobadoController, TasaController, SimuladorController, DesembolsoController],
  providers: [AprobadoService, TasaService, SimuladorService, DesembolsoService],

})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(AprobadoController, TasaController);
  }
}
