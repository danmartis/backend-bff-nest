
import {
  Controller, Get, Param, Inject, HttpException, NotFoundException,
  BadRequestException
} from '@nestjs/common';
import { AprobadoService } from '../../services';
import { AprobadoDTO } from '../../dto';
import { ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Logger } from 'winston';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

@ApiTags('Aprobados')
@Controller('aprobado')
export class AprobadoController {
  constructor(
    private readonly aprobadoService: AprobadoService,
    @Inject(WINSTON_MODULE_PROVIDER)
    private readonly logger: Logger
  ) { }


  /**
 * Function get aprobado by rut.
 * @author Esteban Martínez
 * @param rut
 * @return {AprobadoDTO} obj of aprobado
 */
  @ApiOperation({ description: 'Get retorna una oferta pre aprobada para un rut' })
  @ApiCreatedResponse({
    description: 'Aprobado.',
    type: AprobadoDTO,
  })
  @Get(':rut')
  getAprobado(@Param('rut') rut: String): Promise<any> {
    const rutMock = '4177206';
    if (!rut) {
      this.logger.info('Rut Bad Request');
      throw new BadRequestException('Rut Bad Request');
    }

    if (rut != rutMock) {
      this.logger.info('Rut Not Found');
      throw new NotFoundException('Rut Not Found');
    }

    this.logger.info(`method: getAprobado rut: ${rut}`);
    const result = this.aprobadoService.getAprobado(rut);
    this.logger.info(`response:${JSON.stringify(result)}`)

    return result;
  }



}

