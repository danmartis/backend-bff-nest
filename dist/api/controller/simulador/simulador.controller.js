"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimuladorController = void 0;
const common_1 = require("@nestjs/common");
const services_1 = require("../../services");
const dto_1 = require("../../dto");
const swagger_1 = require("@nestjs/swagger");
const nest_winston_1 = require("nest-winston");
const response_1 = require("../../response");
let SimuladorController = class SimuladorController {
    constructor(simuladorService, logger) {
        this.simuladorService = simuladorService;
        this.logger = logger;
    }
    getSimulador(body) {
        const simuladorMock = {
            "suc": "001",
            "codPro": "CON",
            "tipPro": "DIG",
            "tipOpe": "REPRO",
            "monto": 5000000,
            "plazo": 32,
            "moneda": "CLP",
            "mesesGracia": 2,
            "mesesCuotaZero": 3,
            "segDegr": "Y/N",
            "segITP": "Y/N",
            "segCes": "Y/N",
            "notario": "Y/N",
            "proyeccion": "Y/N",
            "tasaMensual": 4.2,
            "tasaAnual": 2.1
        };
        if (!body.codPro) {
            this.logger.info('Simulador Bad Request');
            throw new common_1.BadRequestException('Simulador Bad Request');
        }
        if (body.codPro != simuladorMock.codPro) {
            this.logger.info('Simulador Not Found');
            throw new common_1.NotFoundException('Simulador Not Found');
        }
        this.logger.info(`method: Simulador: ${body}`);
        const result = this.simuladorService.getSimulador(body);
        this.logger.info(`response:${JSON.stringify(result)}`);
        return result;
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Permite Simular un credito' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Simulador Response.',
        type: response_1.SimuladorResponseDTO,
    }),
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)('')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SimuladorDTO]),
    __metadata("design:returntype", Promise)
], SimuladorController.prototype, "getSimulador", null);
SimuladorController = __decorate([
    (0, swagger_1.ApiTags)('Simulador'),
    (0, common_1.Controller)('simulador'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [services_1.SimuladorService, Object])
], SimuladorController);
exports.SimuladorController = SimuladorController;
//# sourceMappingURL=simulador.controller.js.map