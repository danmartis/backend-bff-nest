"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpConfig = void 0;
const dotenv = require("dotenv");
const fs = require("fs");
const Joi = require("@hapi/joi");
const dotenv_options_1 = require("../api/utils/dotenv-options");
class HttpConfig {
    constructor() {
        const config = dotenv.parse(fs.readFileSync(dotenv_options_1.dotEnvOptions.path));
        this.envConfig = this.validateInput(config);
        this.options =
            {
                timeout: parseInt(config["HTTP_TIMEOUT"]),
                maxRedirects: parseInt(config["HTTP_MAX_REDIRECT"])
            };
    }
    getOptions() {
        return this.options;
    }
    validateInput(envConfig) {
        const envVarsSchema = Joi.object({
            NODE_ENV: Joi.string()
                .valid('development', 'test')
                .default('development'),
            PORT: Joi.number().required(),
        }).unknown(true);
        const { error, value: validatedEnvConfig } = envVarsSchema.validate(envConfig);
        if (error) {
            throw new Error(`Config validation error: ${error.message}`);
        }
        return validatedEnvConfig;
    }
}
exports.HttpConfig = HttpConfig;
//# sourceMappingURL=http.config.js.map