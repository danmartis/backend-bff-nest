import { TasaDTO } from '../dto';
import { HttpService } from '@nestjs/axios';
import { TasaResponseDTO } from '../response';
export declare class TasaService {
    private http;
    private env;
    constructor(http: HttpService);
    getTasa(tasa: TasaDTO): Promise<TasaResponseDTO>;
}
