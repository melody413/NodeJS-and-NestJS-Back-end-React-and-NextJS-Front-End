import { AuthService } from '../auth/auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    private configService;
    constructor(authService: AuthService, configService: ConfigService);
    login(request: any, req: any, body: LoginUserDto, res: Response): Promise<{
        accessToken: string;
    }>;
    success(req: any): Promise<any>;
}
