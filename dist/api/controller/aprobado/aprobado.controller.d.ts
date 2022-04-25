import { AprobadoService } from '../../services';
import { Logger } from 'winston';
export declare class AprobadoController {
    private readonly aprobadoService;
    private readonly logger;
    constructor(aprobadoService: AprobadoService, logger: Logger);
    getAprobado(rut: String): Promise<any>;
}
