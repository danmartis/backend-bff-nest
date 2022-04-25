"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const services_1 = require("./api/services");
const controller_1 = require("./api/controller");
const config_1 = require("@nestjs/config");
const nest_winston_1 = require("nest-winston");
const config_2 = require("./config");
const middleware_1 = require("./api/middleware");
const axios_1 = require("@nestjs/axios");
const logger = new config_2.LoggerConfig();
const http = new config_2.HttpConfig();
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(middleware_1.LoggerMiddleware)
            .forRoutes(controller_1.AprobadoController, controller_1.TasaController);
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            nest_winston_1.WinstonModule.forRoot(logger.console()),
            axios_1.HttpModule.register(http.getOptions()),
        ],
        controllers: [controller_1.AprobadoController, controller_1.TasaController, controller_1.SimuladorController, controller_1.DesembolsoController],
        providers: [services_1.AprobadoService, services_1.TasaService, services_1.SimuladorService, services_1.DesembolsoService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map