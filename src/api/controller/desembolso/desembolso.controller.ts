
import {
  Controller, Get, Param, Inject, HttpException, NotFoundException,
  BadRequestException,
  Body,
  Post
} from '@nestjs/common';
import { DesembolsoService } from '../../services';
import { DesembolsoDTO } from '../../dto';
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { DesembolsoResponse } from '../../response';

@ApiTags('Desembolso')
@Controller('desembolso')
export class DesembolsoController {
  constructor(
    private readonly desembolsoService: DesembolsoService,
    @Inject(WINSTON_MODULE_PROVIDER)
    private readonly logger: Logger
  ) { }


  /**
 * Function post desembolso by .
 * @author Esteban Martínez
 * @param body
 * @return {DesembolsoResponse} obj of desembolso
 */
  @ApiOperation({ description: 'Get Obj of Desembolso' })
  @ApiCreatedResponse({
    description: 'Desembolso Response.',
    type: DesembolsoResponse,


  })

  @Post('')
  getDesembolso(@Body('') body: DesembolsoDTO): Promise<any> {

    const desembolsoMock: DesembolsoDTO = {
      "rutPer": 4177206,
      "operacion": "",
      "montoTotalDsbr": 0,
      "moneda": "CLP",
      "suc": "",
      "fechaDesmbolso": new Date('2020-01-01'),
      "detalleDesembolso": [
        {
          "codigoTipoDesembolso": "",
          "monDesembolso": 0,
          "rutBenef": 0,
          "cajero": "",
          "banco": "",
          "tipoCuenta": "",
          "caja": ""

        }
      ]

    };

    if (!body.rutPer) {
      this.logger.info('Desembolso Bad Request');
      throw new BadRequestException('Desembolso Bad Request');
    }

    if (body.rutPer != desembolsoMock.rutPer) {
      this.logger.info('Desembolso Not Found');
      throw new NotFoundException('Desembolso Not Found');
    }
    this.logger.info(`method: Desembolso: ${body}`);
    const result = this.desembolsoService.getDesembolso(body);
    this.logger.info(`response:${JSON.stringify(result)}`)

    return result;
  }



}

