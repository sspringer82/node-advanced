import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

type Credentials = {
  username: string;
  password: string;
};

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  private readonly logger = new Logger(AuthController.name);

  @Post('/login')
  login(@Body() credentials: Credentials): Promise<string> {
    this.logger.verbose('User is trying to log in');
    return this.authService.login(credentials.username, credentials.password);
  }
}
