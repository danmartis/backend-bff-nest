"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const fs = require("fs");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const nest_winston_1 = require("nest-winston");
const config_1 = require("./config");
const http_exceptions_filter_1 = require("./api/exceptions/http-exceptions.filter");
const swagger_1 = require("@nestjs/swagger");
const dotenv_options_1 = require("./api/utils/dotenv-options");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const config = dotenv.parse(fs.readFileSync(dotenv_options_1.dotEnvOptions.path));
    const logger = new config_1.LoggerConfig();
    const configSwagger = new swagger_1.DocumentBuilder()
        .setTitle(process.env.SWAGGER_NAME || config['SWAGGER_NAME'])
        .setDescription(process.env.SWAGGER_DESCRIPTION || config['SWAGGER_DESCRIPTION'])
        .setVersion(process.env.SWAGGER_VERSION || config['SWAGGER_VERSION'])
        .setContact(process.env.SWAGGER_CONTACT_NAME || config['SWAGGER_CONTACT_NAME'], "", process.env.SWAGGER_CONTACT_EMAIL ||
        config['SWAGGER_CONTACT_EMAIL'])
        .build();
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: nest_winston_1.WinstonModule.createLogger(logger.console()),
    });
    if (process.env.NODE_ENV || config['NODE_ENV'] !== 'production') {
        const document = swagger_1.SwaggerModule.createDocument(app, configSwagger);
        swagger_1.SwaggerModule.setup('api', app, document);
    }
    app.useGlobalFilters(new http_exceptions_filter_1.HttpExceptionFilter);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useLogger(app.get(nest_winston_1.WINSTON_MODULE_NEST_PROVIDER));
    await app.listen(process.env.PORT || config['PORT']);
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}
bootstrap();
//# sourceMappingURL=main.js.map