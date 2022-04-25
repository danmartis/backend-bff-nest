import { SimuladorDTO } from '../dto';
import { HttpService } from '@nestjs/axios';
import { SimuladorResponseDTO } from '../response';
export declare class SimuladorService {
    private http;
    private env;
    private url;
    constructor(http: HttpService);
    getSimulador(body: SimuladorDTO): Promise<SimuladorResponseDTO>;
}
