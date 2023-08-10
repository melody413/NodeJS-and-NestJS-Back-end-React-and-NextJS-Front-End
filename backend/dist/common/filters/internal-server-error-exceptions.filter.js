"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerErrorExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const Sentry = require("@sentry/node");
let InternalServerErrorExceptionsFilter = class InternalServerErrorExceptionsFilter {
    async catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const statusCode = exception.getStatus();
        Sentry.setContext('request', {
            url: request.url,
            body: request.body,
            query: request.query,
            params: request.params,
            language: request.language,
            headers: request.headers,
            rawHeaders: request.rawHeaders,
        });
        Sentry.captureException(exception);
        response.status(statusCode).json({
            statusCode,
            message: 'Internal server error',
        });
    }
};
InternalServerErrorExceptionsFilter = __decorate([
    (0, common_1.Catch)(common_1.InternalServerErrorException)
], InternalServerErrorExceptionsFilter);
exports.InternalServerErrorExceptionsFilter = InternalServerErrorExceptionsFilter;
//# sourceMappingURL=internal-server-error-exceptions.filter.js.map