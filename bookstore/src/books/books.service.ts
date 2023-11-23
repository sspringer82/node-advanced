import { Injectable } from '@nestjs/common';
import { Book, CreateBook } from './book';
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

  getOneBook(id: number): Promise<Book> {
    return this.booksRepository.findOneBy({ id });
  }

  save(newBook: CreateBook | Book): Promise<Book> {
    return this.booksRepository.save(newBook);
  }

  async removeBook(id: number): Promise<void> {
    await this.booksRepository.delete({ id });
  }
}
