import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import { TasaDTO } from '../dto';
import { HttpService } from '@nestjs/axios';

import { dotEnvOptions } from '../utils/dotenv-options';
import { TasaResponseDTO } from '../response';

@Injectable()
export class TasaService {
  private env = dotenv.parse(fs.readFileSync(dotEnvOptions.path));

  constructor(
    private http: HttpService,
  ) { }


  async getTasa(tasa: TasaDTO): Promise<TasaResponseDTO> {
    const resp = await this.http.get<TasaResponseDTO>(`https://run.mocky.io/v3/e379b13a-cf4c-4e63-abee-2236178078a1`).toPromise();
    return resp.data;

  }



}