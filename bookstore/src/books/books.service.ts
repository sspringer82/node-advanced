import { Injectable } from '@nestjs/common';
import { Book } from './book';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private readonly booksRepository: Repository<Book>,
  ) {}

  getAllBooks(): Promise<Book[]> {
    return this.booksRepository.find();
  }
}
