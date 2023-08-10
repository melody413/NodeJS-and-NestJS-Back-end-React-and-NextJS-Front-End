import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
export declare class InternalServerErrorExceptionsFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): Promise<void>;
}
