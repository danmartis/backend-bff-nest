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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimuladorService = void 0;
const dotenv = require("dotenv");
const fs = require("fs");
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const dotenv_options_1 = require("../utils/dotenv-options");
let SimuladorService = class SimuladorService {
    constructor(http) {
        this.http = http;
        this.env = dotenv.parse(fs.readFileSync(dotenv_options_1.dotEnvOptions.path));
        this.url = 'https://run.mocky.io/v3/29924abd-74a3-4d71-ad29-38f1aa449d17';
    }
    async getSimulador(body) {
        const simulador = await this.http.get(`${this.url}`).toPromise();
        return simulador.data;
    }
};
SimuladorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], SimuladorService);
exports.SimuladorService = SimuladorService;
//# sourceMappingURL=simulador.service.js.map