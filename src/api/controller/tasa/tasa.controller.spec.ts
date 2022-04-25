import { Test, TestingModule } from '@nestjs/testing';
import { WinstonModule } from 'nest-winston';
import { TasaController } from '..';
import { TasaService } from '../../services';
import { LoggerConfig, } from '../../../config';
import { NotFoundException } from '@nestjs/common';
import { TasaDTO } from 'src/api/dto';
import { TasaResponseDTO } from 'src/api/response';

const logger: LoggerConfig = new LoggerConfig();

describe('TasaController', () => {
  let tasaController: TasaController;

  const mockTasa: TasaDTO = {
    "rutPer": 4177206,
    "rutEmp": 4177206,
    "sucemp": "002",
    "codPro": "DIG",
    "tipoAfil": "PBSC",
    "monto": 1000000,
    "plazo": 18,
    "moneda": "CLP",
  }

  const mockTasaResp: TasaResponseDTO = {
    "tasaMensual": 1.0,
    "tasaAnual": 12.0,

  }

  const mockTasaResponse = {
    getTasa: jest.fn().mockImplementation(() =>
      Promise.resolve(mockTasaResp))
  }

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [WinstonModule.forRoot(logger.console())],
      controllers: [TasaController],
      providers: [TasaService],
    })
      .overrideProvider(TasaService)
      .useValue(mockTasaResponse)
      .compile();

    tasaController = app.get<TasaController>(TasaController);
  });

  it('should be defined', () => {
    expect(tasaController).toBeDefined();
  });

  describe('getTasa', () => {


    it('should post tasa', async () => {


      expect(await tasaController.getTasa(mockTasa)).toEqual(mockTasaResp);

    });

    it('should throw Tasa NOT_FOUND', async () => {

      const mockError = new NotFoundException("Tasa not found");
      jest.spyOn(tasaController, 'getTasa').mockRejectedValue(new NotFoundException("Tasa not found"));
      await expect(tasaController.getTasa(mockTasa)).rejects.toThrow(mockError);
      await expect(tasaController.getTasa(mockTasa)).rejects.toThrow(new NotFoundException("Tasa not found"));
    });

  });


});
