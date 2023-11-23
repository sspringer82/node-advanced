import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user';
import { UserService } from './user.service';

@Module({
  providers: [AuthService, JwtStrategy, UserService],
  controllers: [AuthController],
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: 'topSecret',
      signOptions: { expiresIn: '3600s' },
    }),
  ],
})
export class AuthModule {}
