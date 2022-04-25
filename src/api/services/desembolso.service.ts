import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import { DesembolsoDTO, TasaDTO } from '../dto';
import { HttpService } from '@nestjs/axios';

import { dotEnvOptions } from '../utils/dotenv-options';
import { DesembolsoResponse } from '../response';

@Injectable()
export class DesembolsoService {
  private env = dotenv.parse(fs.readFileSync(dotEnvOptions.path));

  constructor(
    private http: HttpService,
  ) { }


  async getDesembolso(body: DesembolsoDTO): Promise<DesembolsoResponse> {
    const des = await this.http.get<DesembolsoResponse>(`https://run.mocky.io/v3/31e6b1e5-c4fd-43bc-a7f1-e9fa49828939`).toPromise();
    return des.data;

  }



}