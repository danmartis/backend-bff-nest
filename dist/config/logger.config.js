"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerConfig = void 0;
const winston_1 = require("winston");
const dotenv = require("dotenv");
const fs = require("fs");
const dotenv_options_1 = require("../api/utils/dotenv-options");
class LoggerConfig {
    constructor() {
        this.config = dotenv.parse(fs.readFileSync(dotenv_options_1.dotEnvOptions.path));
        this.options = {
            exitOnError: false,
            format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.timestamp(), winston_1.format.printf((msg) => {
                return `${msg.timestamp} [${msg.level}] - ${msg.message}`;
            })),
            transports: [new winston_1.transports.Console({ level: this.config.LOG_LEVEL })],
        };
    }
    console() {
        return this.options;
    }
}
exports.LoggerConfig = LoggerConfig;
//# sourceMappingURL=logger.config.js.map