import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from './token';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(username: string, password: string): Promise<string> {
    const user = await this.userService.getUserByCredentials(
      username,
      password,
    );

    if (user !== null) {
      const payload: TokenPayload = {
        firstname: 'admin',
        lastname: 'istrator',
      };
      return this.jwtService.signAsync(payload);
    }
    throw new UnauthorizedException();
  }
}
