import { Test, TestingModule } from '@nestjs/testing';
import { WinstonModule } from 'nest-winston';
import { SimuladorController } from '..';
import { SimuladorService } from '../../services';
import { LoggerConfig, } from '../../../config';
import { NotFoundException } from '@nestjs/common';
import { SimuladorDTO } from 'src/api/dto';
import { SimuladorResponseDTO } from 'src/api/response';

const logger: LoggerConfig = new LoggerConfig();

describe('SimuladorController', () => {
  let simuladorController: SimuladorController;

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
    "tasaAnual": 2.1,
  };

  const mockSimuladorResp: SimuladorResponseDTO = {

    "valorCuo": 120000,
    "cuoMsegCes": 120000,
    "cuoMsegDes": 13000,
    "cuoMsegITP": 5000,
    "caeOrig": 3.5,
    "caeSeg": 4.2,
    "gastNot": 2400,
    "impTyE": 200,
    "capitalInicial": 500000,
    "ctc": 6000000,
    "cuadroPago": [
      {
        "numCuo": 0.1,
        "montInteres": 25000,
        "monProye": 1000,
        "monCuot": 30000,
        "monAmor": 450000,
        "fecCuo": new Date('2020-01-01'),
        "saldoK": 7500000,
      }
    ],
  }

  const getSimulador = {
    getSimulador: jest.fn().mockImplementation(() =>
      Promise.resolve(mockSimuladorResp))
  }

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [WinstonModule.forRoot(logger.console())],
      controllers: [SimuladorController],
      providers: [SimuladorService],
    })
      .overrideProvider(SimuladorService)
      .useValue(getSimulador)
      .compile();

    simuladorController = app.get<SimuladorController>(SimuladorController);
  });

  it('should be defined', () => {
    expect(simuladorController).toBeDefined();
  });

  describe('getSimulador', () => {

    it('should get simulador', async () => {

      expect(await simuladorController.getSimulador(simuladorMock)).toEqual(mockSimuladorResp);

    });

    it('should throw getSimulador NOT_FOUND', async () => {

      const mockError = new NotFoundException("Tasa not found");
      jest.spyOn(simuladorController, 'getSimulador').mockRejectedValue(new NotFoundException("Tasa not found"));
      await expect(simuladorController.getSimulador(simuladorMock)).rejects.toThrow(mockError);
      await expect(simuladorController.getSimulador(simuladorMock)).rejects.toThrow(new NotFoundException("Tasa not found"));
    });

  });


});
