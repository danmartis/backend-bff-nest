import { Test, TestingModule } from '@nestjs/testing';
import { WinstonModule } from 'nest-winston';
import { DesembolsoController } from '..';
import { DesembolsoService } from '../../services';
import { LoggerConfig, } from '../../../config';
import { NotFoundException } from '@nestjs/common';
import { DesembolsoDTO } from 'src/api/dto';
import { DesembolsoResponse } from 'src/api/response';

const logger: LoggerConfig = new LoggerConfig();

describe('DesembolsoController', () => {
  let desembolsoController: DesembolsoController;
  const mockDesembolso: DesembolsoDTO = {
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

  const MockDesembolsoResponse: DesembolsoResponse = {

    "idDesembolso": "10",
    "resultado": "Result",
    "montoDesembolsado": 10,
    "montoPendiente": 2,
    "detalleDesembolsos": [
      {
        "codigoTipoDesembolso": "001",
        "estado": "en este estado",
        "detalleEstado": "esta mas que ok",
        "fechaEjecucion": new Date('2020-01-01'),
      }
    ]

  }

  const getDesembolso = {
    getDesembolso: jest.fn().mockImplementation(() =>
      Promise.resolve(MockDesembolsoResponse))
  }

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [WinstonModule.forRoot(logger.console())],
      controllers: [DesembolsoController],
      providers: [DesembolsoService],
    })
      .overrideProvider(DesembolsoService)
      .useValue(getDesembolso)
      .compile();

    desembolsoController = app.get<DesembolsoController>(DesembolsoController);
  });

  it('should be defined', () => {
    expect(desembolsoController).toBeDefined();
  });

  describe('getDesembolso', () => {

    it('should get Desembolso', async () => {

      expect(await desembolsoController.getDesembolso(mockDesembolso)).toEqual(MockDesembolsoResponse);

    });

    it('should throw Desembolso NOT_FOUND', async () => {

      const mockError = new NotFoundException("Desembolso not found");
      jest.spyOn(desembolsoController, 'getDesembolso').mockRejectedValue(new NotFoundException("Desembolso not found"));
      await expect(desembolsoController.getDesembolso(mockDesembolso)).rejects.toThrow(mockError);
      await expect(desembolsoController.getDesembolso(mockDesembolso)).rejects.toThrow(new NotFoundException("Desembolso not found"));
    });

  });


});
