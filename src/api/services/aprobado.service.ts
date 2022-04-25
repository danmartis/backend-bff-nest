import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import { AprobadoDTO } from '../dto';
import { HttpService } from '@nestjs/axios';

import { dotEnvOptions } from '../utils/dotenv-options';

@Injectable()
export class AprobadoService {
  private env = dotenv.parse(fs.readFileSync(dotEnvOptions.path));

  constructor(
    private http: HttpService,
  ) { }


  async getAprobado(rut: String): Promise<AprobadoDTO> {
    const aprobado = await this.http.get<AprobadoDTO>(`https://run.mocky.io/v3/3e40f86f-da9b-4939-b91d-6dc2e8effb2d`).toPromise();
    return aprobado.data;

  }



}