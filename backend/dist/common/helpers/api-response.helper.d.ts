import { Type } from '@nestjs/common';
import { ApiResponseOptions } from '@nestjs/swagger';
export declare class ApiResponseHelper {
    static success(type: Type<unknown> | Function | [Function] | string, httpCode?: number): ApiResponseOptions;
    static successWithExample(example: any, httpCode?: number): ApiResponseOptions;
    static created(type?: Type<unknown> | Function | [Function] | string): ApiResponseOptions;
    static validationError(errorMessage: string): ApiResponseOptions;
    static validationErrors(errorMessage: string[]): ApiResponseOptions;
    static unauthorized(): ApiResponseOptions;
    static notFound(notFoundError?: string): ApiResponseOptions;
}
