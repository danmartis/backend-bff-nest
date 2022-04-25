import { DesembolsoDTO } from '../dto';
import { HttpService } from '@nestjs/axios';
import { DesembolsoResponse } from '../response';
export declare class DesembolsoService {
    private http;
    private env;
    constructor(http: HttpService);
    getDesembolso(body: DesembolsoDTO): Promise<DesembolsoResponse>;
}
