import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { AccessTokenInterface } from './auth.type';
import { TokensResponseDto } from './dto/tokens-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: User): Promise<TokensResponseDto> {
    const accessToken = await this.createAccessToken(user);

    return {
      accessToken,
    };
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<Partial<User> | null> {
    const user = await this.userService.findByEmail(email);

    if (user && (await bcrypt.compare(password, user.password))) {
      return { name: user.name, email: user.email, id: user.id };
    }

    return null;
  }

  private async createAccessToken(user: Partial<User>): Promise<string> {
    const payload: AccessTokenInterface = {
      name: user.name,
      email: user.email,
      id: user.id,
    };

    return this.jwtService.signAsync(payload);
  }
}
