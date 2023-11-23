import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

type Credentials = {
  username: string;
  password: string;
};

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  login(@Body() credentials: Credentials): Promise<string> {
    return this.authService.login(credentials.username, credentials.password);
  }
}
