import { Test, TestingModule } from '@nestjs/testing';
import { WinstonModule } from 'nest-winston';
import { AprobadoController } from '..';
import { AprobadoService } from '../../services';
import { LoggerConfig, } from '../../../config';
import { NotFoundException } from '@nestjs/common';

const logger: LoggerConfig = new LoggerConfig();

describe('AprobadoController', () => {
  let aprobadoController: AprobadoController;
  const mockAprobado = {
    "rutPer": 0,
    "rutEmp": 0,
    "nombreEmp": "string",
    "antiguedad": 0,
    "sucemp": "string",
    "tipoAfil": "string",
    "codPro": "string",
    "montoMax": 0,
    "plazoMin": 0,
    "rentaLprom": 0
  }

  const mockAprobados = {
    getAprobado: jest.fn().mockImplementation(() =>
      Promise.resolve(mockAprobado))
  }


  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [WinstonModule.forRoot(logger.console())],
      controllers: [AprobadoController],
      providers: [AprobadoService],
    })
      .overrideProvider(AprobadoService)
      .useValue(mockAprobados)
      .compile();

    aprobadoController = app.get<AprobadoController>(AprobadoController);
  });

  it('should be defined', () => {
    expect(aprobadoController).toBeDefined();
  });

  describe('getAprobado', () => {

    it('should get aprobado', async () => {
      const rut = '4177206'
      expect(await aprobadoController.getAprobado(rut)).toEqual(mockAprobado);

    });

    it('should throw rut NOT_FOUND', async () => {

      const rut = '41';
      const mockError = new NotFoundException("Rut not found");
      jest.spyOn(aprobadoController, 'getAprobado').mockRejectedValue(new NotFoundException("Rut not found"));
      await expect(aprobadoController.getAprobado(rut)).rejects.toThrow(mockError);
      await expect(aprobadoController.getAprobado(rut)).rejects.toThrow(new NotFoundException("Rut not found"));
    });

  });


});
