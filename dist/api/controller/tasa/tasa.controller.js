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
exports.TasaController = void 0;
const common_1 = require("@nestjs/common");
const services_1 = require("../../services");
const dto_1 = require("../../dto");
const swagger_1 = require("@nestjs/swagger");
const nest_winston_1 = require("nest-winston");
const response_1 = require("../../response");
let TasaController = class TasaController {
    constructor(tasasService, logger) {
        this.tasasService = tasasService;
        this.logger = logger;
    }
    getTasa(body) {
        const tasamock = {
            "rutPer": 4177206,
            "rutEmp": 4177206,
            "sucemp": "002",
            "codPro": "DIG",
            "tipoAfil": "PBSC",
            "monto": 1000000,
            "plazo": 18,
            "moneda": "CLP",
        };
        if (!body.rutPer) {
            this.logger.info('Tasa Bad Request');
            throw new common_1.BadRequestException('Tasa Bad Request');
        }
        if (tasamock.rutPer != body.rutPer) {
            this.logger.info('Tasa Not Found');
            throw new common_1.NotFoundException('Tasa Not Found');
        }
        this.logger.info(`method: tasa: ${body}`);
        const result = this.tasasService.getTasa(body);
        this.logger.info(`response:${JSON.stringify(result)}`);
        return result;
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Get retorna la tasa de interes para un credito' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Tasa Response.',
        type: response_1.TasaResponseDTO,
    }),
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)('')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.TasaDTO]),
    __metadata("design:returntype", Promise)
], TasaController.prototype, "getTasa", null);
TasaController = __decorate([
    (0, swagger_1.ApiTags)('Tasas'),
    (0, common_1.Controller)('tasa/credit'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [services_1.TasaService, Object])
], TasaController);
exports.TasaController = TasaController;
//# sourceMappingURL=tasa.controller.js.map