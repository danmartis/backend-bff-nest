import winston, { format, transports } from 'winston';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { dotEnvOptions } from '../api/utils/dotenv-options';

export class LoggerConfig {
  private readonly options: winston.LoggerOptions;
  private config = dotenv.parse(fs.readFileSync(dotEnvOptions.path));

  constructor() {
    this.options = {
      exitOnError: false,
      format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf((msg) => {
          return `${msg.timestamp} [${msg.level}] - ${msg.message}`;
        }),
      ),
      transports: [new transports.Console({ level: this.config.LOG_LEVEL })], // alert > error > warning > notice > info > debug
    };
  }

  public console() {
    return this.options;
  }
}
