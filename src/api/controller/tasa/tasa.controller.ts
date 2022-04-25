
import {
  Controller, Get, Param, Inject, HttpException, NotFoundException,
  BadRequestException,
  Post,
  Body
} from '@nestjs/common';
import { TasaService } from '../../services';
import { TasaDTO } from '../../dto';
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { TasaResponseDTO } from '../../response';

@ApiTags('Tasas')
@Controller('tasa/credit')
export class TasaController {
  constructor(
    private readonly tasasService: TasaService,
    @Inject(WINSTON_MODULE_PROVIDER)
    private readonly logger: Logger
  ) { }


  /**
 * Function get tasa by .
 * @author Esteban Martínez

 * @return {TasaResponseDTO} obj of tasa
 */
  @ApiOperation({ description: 'Get retorna la tasa de interes para un credito' })
  @ApiCreatedResponse({
    description: 'Tasa Response.',
    type: TasaResponseDTO,
  })

  @Post('')
  getTasa(
    @Body('') body: TasaDTO): Promise<TasaResponseDTO> {

    const tasamock: TasaDTO = {
      "rutPer": 4177206,
      "rutEmp": 4177206,
      "sucemp": "002",
      "codPro": "DIG",
      "tipoAfil": "PBSC",
      "monto": 1000000,
      "plazo": 18,
      "moneda": "CLP",
    }
    if (!body.rutPer) {
      this.logger.info('Tasa Bad Request');
      throw new BadRequestException('Tasa Bad Request');
    }

    if (tasamock.rutPer != body.rutPer) {
      this.logger.info('Tasa Not Found');
      throw new NotFoundException('Tasa Not Found');
    }

    this.logger.info(`method: tasa: ${body}`);
    const result = this.tasasService.getTasa(body);
    this.logger.info(`response:${JSON.stringify(result)}`)

    return result;
  }



}

