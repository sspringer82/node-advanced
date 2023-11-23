import { Injectable } from '@nestjs/common';
import { Book } from './book';

@Injectable()
export class BooksService {
  getAllBooks(): Book[] {
    return [
      {
        id: 1,
        title: 'MyBook',
        author: 'Me',
        price: 42,
        pages: 127,
        year: 2025,
      },
    ];
  }
}
