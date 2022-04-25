import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import { SimuladorDTO, TasaDTO } from '../dto';
import { HttpService } from '@nestjs/axios';

import { dotEnvOptions } from '../utils/dotenv-options';
import { SimuladorResponseDTO } from '../response';

@Injectable()
export class SimuladorService {
  private env = dotenv.parse(fs.readFileSync(dotEnvOptions.path));
  private url = 'https://run.mocky.io/v3/29924abd-74a3-4d71-ad29-38f1aa449d17';
  constructor(
    private http: HttpService,
  ) { }


  async getSimulador(body: SimuladorDTO): Promise<SimuladorResponseDTO> {
    const simulador = await this.http.get<SimuladorResponseDTO>(`${this.url}`).toPromise();
    return simulador.data;

  }



}