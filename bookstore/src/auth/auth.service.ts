import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenPayload } from './token';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(username: string, password: string): Promise<string> {
    if (username === 'admin' && password === 'test') {
      const payload: TokenPayload = {
        firstname: 'admin',
        lastname: 'istrator',
      };
      return this.jwtService.signAsync(payload);
    }
    throw new UnauthorizedException();
  }
}
