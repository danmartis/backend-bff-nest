import { DesembolsoService } from '../../services';
import { DesembolsoDTO } from '../../dto';
import { Logger } from 'winston';
export declare class DesembolsoController {
    private readonly desembolsoService;
    private readonly logger;
    constructor(desembolsoService: DesembolsoService, logger: Logger);
    getDesembolso(body: DesembolsoDTO): Promise<any>;
}
