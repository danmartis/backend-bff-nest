import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as Joi from '@hapi/joi';
import { dotEnvOptions } from '../api/utils/dotenv-options';

export class HttpConfig {
  private readonly options;
  private readonly envConfig: IEnvConfigInterface;

  constructor() {
    const config = dotenv.parse(fs.readFileSync(dotEnvOptions.path));
    /**
     * TODO se debe validar su comportamiento en kubernetes
     */
    this.envConfig = this.validateInput(config);
    this.options =
    {
      timeout: parseInt(config["HTTP_TIMEOUT"]),
      maxRedirects: parseInt(config["HTTP_MAX_REDIRECT"])
    };
  }

  public getOptions() {
    return this.options;
  }

  private validateInput(envConfig: IEnvConfigInterface): IEnvConfigInterface {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid('development', 'test')
        .default('development'),
      PORT: Joi.number().required(),
    }).unknown(true);

    const { error, value: validatedEnvConfig } = envVarsSchema.validate(
      envConfig,
    );
    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }
}

export default interface IEnvConfigInterface {
  [key: string]: string;
}
