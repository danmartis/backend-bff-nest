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
exports.AprobadoController = void 0;
const common_1 = require("@nestjs/common");
const services_1 = require("../../services");
const dto_1 = require("../../dto");
const swagger_1 = require("@nestjs/swagger");
const nest_winston_1 = require("nest-winston");
let AprobadoController = class AprobadoController {
    constructor(aprobadoService, logger) {
        this.aprobadoService = aprobadoService;
        this.logger = logger;
    }
    getAprobado(rut) {
        const rutMock = '4177206';
        if (!rut) {
            this.logger.info('Rut Bad Request');
            throw new common_1.BadRequestException('Rut Bad Request');
        }
        if (rut != rutMock) {
            this.logger.info('Rut Not Found');
            throw new common_1.NotFoundException('Rut Not Found');
        }
        this.logger.info(`method: getAprobado rut: ${rut}`);
        const result = this.aprobadoService.getAprobado(rut);
        this.logger.info(`response:${JSON.stringify(result)}`);
        return result;
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ description: 'Get retorna una oferta pre aprobada para un rut' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Aprobado.',
        type: dto_1.AprobadoDTO,
    }),
    (0, common_1.Get)(':rut'),
    __param(0, (0, common_1.Param)('rut')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AprobadoController.prototype, "getAprobado", null);
AprobadoController = __decorate([
    (0, swagger_1.ApiTags)('Aprobados'),
    (0, common_1.Controller)('aprobado'),
    __param(1, (0, common_1.Inject)(nest_winston_1.WINSTON_MODULE_PROVIDER)),
    __metadata("design:paramtypes", [services_1.AprobadoService, Object])
], AprobadoController);
exports.AprobadoController = AprobadoController;
//# sourceMappingURL=aprobado.controller.js.map