import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { WinstonModule } from 'nest-winston';
import { AprobadoController, TasaController } from '../src/api/controller';
import { AprobadoService, TasaService } from '../src/api/services';
import { HttpModule } from '@nestjs/axios';
import { HttpConfig, LoggerConfig } from '../src/config';

const logger: LoggerConfig = new LoggerConfig();
const http: HttpConfig = new HttpConfig();

describe('AprobadoController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [WinstonModule.forRoot(logger.console()),
      HttpModule.register(http.getOptions()),
      ],
      controllers: [AprobadoController],
      providers: [AprobadoService],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init()
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/aprobados')
      .expect(200)
      .expect('Content-Type', /json/)
  });

  afterAll(async () => {
    await app.close();
  });


});


describe('TasaController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [WinstonModule.forRoot(logger.console()),
      HttpModule.register(http.getOptions()),
      ],
      controllers: [TasaController],
      providers: [TasaService],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init()
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/tasa/credit')
      .expect(200)
      .expect('Content-Type', /json/)
  });

  afterAll(async () => {
    await app.close();
  });


});

