import { SimuladorService } from '../../services';
import { SimuladorDTO } from '../../dto';
import { Logger } from 'winston';
export declare class SimuladorController {
    private readonly simuladorService;
    private readonly logger;
    constructor(simuladorService: SimuladorService, logger: Logger);
    getSimulador(body: SimuladorDTO): Promise<any>;
}
