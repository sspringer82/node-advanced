import { Injectable } from '@nestjs/common';
import { User } from './user';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async getUserByCredentials(
    username: string,
    password: string,
  ): Promise<User> {
    return this.usersRepository.findOneBy({ username, password });
  }
}
