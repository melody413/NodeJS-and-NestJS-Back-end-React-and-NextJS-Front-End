import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { TokensResponseDto } from './dto/tokens-response.dto';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(user: User): Promise<TokensResponseDto>;
    validateUser(email: string, password: string): Promise<Partial<User> | null>;
    private createAccessToken;
}
