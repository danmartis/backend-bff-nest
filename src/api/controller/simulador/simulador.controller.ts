
import {
  Controller, Get, Param, Inject, HttpException, NotFoundException,
  BadRequestException,
  Post,
  Body
} from '@nestjs/common';
import { SimuladorService } from '../../services';
import { SimuladorDTO } from '../../dto';
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { SimuladorResponseDTO } from '../../response';

@ApiTags('Simulador')
@Controller('simulador')
export class SimuladorController {
  constructor(
    private readonly simuladorService: SimuladorService,
    @Inject(WINSTON_MODULE_PROVIDER)
    private readonly logger: Logger
  ) { }


  /**
 * Function get simulador by .
 * @author Esteban Martínez
 * @body body
 * @return {SimuladorResponseDTO} obj of simulador
 */
  @ApiOperation({ description: 'Permite Simular un credito' })
  @ApiCreatedResponse({
    description: 'Simulador Response.',
    type: SimuladorResponseDTO,
  })
  @Post('')
  getSimulador(@Body('') body: SimuladorDTO): Promise<any> {

    const simuladorMock: SimuladorDTO = {
      "suc": "001",
      "codPro": "CON",
      "tipPro": "DIG",
      "tipOpe": "REPRO",
      "monto": 5000000,
      "plazo": 32,
      "moneda": "CLP",
      "mesesGracia": 2,
      "mesesCuotaZero": 3,
      "segDegr": "Y/N",
      "segITP": "Y/N",
      "segCes": "Y/N",
      "notario": "Y/N",
      "proyeccion": "Y/N",
      "tasaMensual": 4.2,
      "tasaAnual": 2.1
    };
    if (!body.codPro) {
      this.logger.info('Simulador Bad Request');
      throw new BadRequestException('Simulador Bad Request');
    }

    if (body.codPro != simuladorMock.codPro) {
      this.logger.info('Simulador Not Found');
      throw new NotFoundException('Simulador Not Found');
    }

    this.logger.info(`method: Simulador: ${body}`);
    const result = this.simuladorService.getSimulador(body);
    this.logger.info(`response:${JSON.stringify(result)}`)

    return result;
  }



}

