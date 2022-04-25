import { TasaService } from '../../services';
import { TasaDTO } from '../../dto';
import { Logger } from 'winston';
import { TasaResponseDTO } from 'src/api/response';
export declare class TasaController {
    private readonly tasasService;
    private readonly logger;
    constructor(tasasService: TasaService, logger: Logger);
    getTasa(body: TasaDTO): Promise<TasaResponseDTO>;
}
