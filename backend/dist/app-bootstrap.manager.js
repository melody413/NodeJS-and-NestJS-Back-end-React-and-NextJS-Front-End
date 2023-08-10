"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppBootstrapManager = void 0;
const common_1 = require("@nestjs/common");
const testing_1 = require("@nestjs/testing");
const express_1 = require("express");
const class_validator_1 = require("class-validator");
const app_module_1 = require("./app.module");
const internal_server_error_exceptions_filter_1 = require("./common/filters/internal-server-error-exceptions.filter");
class AppBootstrapManager {
    static getTestingModuleBuilder() {
        return testing_1.Test.createTestingModule({
            imports: [app_module_1.AppModule],
        });
    }
    static setAppDefaults(app) {
        (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), {
            fallbackOnErrors: true,
            fallback: true,
        });
        app
            .use((0, express_1.json)({ limit: '50mb' }))
            .setGlobalPrefix('api/v1')
            .useGlobalFilters(new internal_server_error_exceptions_filter_1.InternalServerErrorExceptionsFilter())
            .useGlobalPipes(new common_1.ValidationPipe({
            whitelist: true,
            validationError: {
                target: false,
            },
            stopAtFirstError: true,
        }))
            .enableCors();
        return app;
    }
}
exports.AppBootstrapManager = AppBootstrapManager;
//# sourceMappingURL=app-bootstrap.manager.js.map