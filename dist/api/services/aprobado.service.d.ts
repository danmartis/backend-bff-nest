import { AprobadoDTO } from '../dto';
import { HttpService } from '@nestjs/axios';
export declare class AprobadoService {
    private http;
    private env;
    constructor(http: HttpService);
    getAprobado(rut: String): Promise<AprobadoDTO>;
}
