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
exports.DesembolsoController = void 0;
const common_1 = require("@nestjs/common");
const services_1 = require("../../services");
const dto_1 = require("../../dto");
const swagger_1 = require("@nestjs/swagger");
const nest_winston_1 = require("nest-winston");
const response_1 = require("../../response");
let DesembolsoController = class DesembolsoController {
    constructor(desembolsoService, logger) {
        this.desembolsoService = desembolsoService;
        this.logger = logger;
    }
    getDesembolso(body) {
        const desembolsoMock = {
            "rutPer": 4177206,
            "operacion": "",
            "montoTotalDsbr": 0,
            "moneda": "CLP",
            "suc": "",
            "fechaDesmbolso": new Date('2020-01-01'),
            "detalleDesembolso": [
                {
                    "codigoTipoDesembolso": "",
                    "monDesembolso": 0,
                    "rutBenef": 0,
                    "cajero": "",
                    "banco": "",
                    "tipoCuenta": "",
                    "caja": ""
                }
            ]
        };
        if (!body.rutPer) {
            this.logger.info('Desembolso Bad Request');
            throw new common_1.BadRequestException('Desembolso Bad Request');
        }
        if (body.rutPer != desembolsoMock.rutPer) {
            this.logger.info('Desembolso Not Found');
            throw new common_1.NotFoundException('Desembolso Not Found');
        }
        this.logger.info(`method: Desembolso: ${body}`);
        const result = this.desembolsoService.getDesembolso(body);
        this.logger.info(`response:${JSON.stringify(result)}`);
        return result;
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Get Obj of Desembolso' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Desembolso Response.',
        type: response_1.DesembolsoResponse,
    }),
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)('')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.DesembolsoDTO]),
    __metadata("design:returntype", Promise)
], DesembolsoController.prototype, "getDesembolso", null);
DesembolsoController = __decorate([
    (0, swagger_1.ApiTags)('Desembolso'),
    (0, common_1.Controller)('desembolso'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [services_1.DesembolsoService, Object])
], DesembolsoController);
exports.DesembolsoController = DesembolsoController;
//# sourceMappingURL=desembolso.controller.js.map