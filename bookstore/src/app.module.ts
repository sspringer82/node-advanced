import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './books/book';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    BooksModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        synchronize: true,
        logging: false,
        autoSave: true,
        location: configService.get<string>('DATABASE_LOCATION'),
        entities: [Book, User],
        migrations: [],
        subscribers: [],
        type: 'sqljs',
      }),
      inject: [ConfigService],
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
