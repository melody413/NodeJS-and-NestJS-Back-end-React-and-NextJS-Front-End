"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponseHelper = void 0;
const common_1 = require("@nestjs/common");
class ApiResponseHelper {
    static success(type, httpCode = common_1.HttpStatus.OK) {
        return { status: httpCode, type, description: 'Successful operation' };
    }
    static successWithExample(example, httpCode = common_1.HttpStatus.OK) {
        return {
            status: httpCode,
            schema: { example },
            description: 'Successful operation',
        };
    }
    static created(type = '') {
        return {
            status: common_1.HttpStatus.CREATED,
            type,
            description: 'Successfully created',
        };
    }
    static validationError(errorMessage) {
        const schemaExample = {
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            message: [errorMessage],
            error: 'Bad Request',
        };
        return {
            status: common_1.HttpStatus.BAD_REQUEST,
            description: 'Validation error',
            schema: { example: schemaExample },
        };
    }
    static validationErrors(errorMessage) {
        const schemaExample = {
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            message: [...errorMessage],
            error: 'Bad Request',
        };
        return {
            status: common_1.HttpStatus.BAD_REQUEST,
            description: 'Validation error',
            schema: { example: schemaExample },
        };
    }
    static unauthorized() {
        const schemaExample = {
            statusCode: common_1.HttpStatus.UNAUTHORIZED,
            error: 'Unauthorized',
        };
        return {
            status: common_1.HttpStatus.UNAUTHORIZED,
            description: 'Unauthorized',
            schema: { example: schemaExample },
        };
    }
    static notFound(notFoundError = 'Not found') {
        const schemaExample = {
            statusCode: common_1.HttpStatus.NOT_FOUND,
            error: notFoundError,
        };
        return {
            status: common_1.HttpStatus.NOT_FOUND,
            description: 'Successfully created',
            schema: { example: schemaExample },
        };
    }
}
exports.ApiResponseHelper = ApiResponseHelper;
//# sourceMappingURL=api-response.helper.js.map