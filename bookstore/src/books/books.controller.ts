import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Book, CreateBook } from './book';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.booksService.getAllBooks();
  }

  @Get('/:id')
  async getOneBook(@Param('id') id: string): Promise<Book> {
    const parsedId = parseInt(id, 10);
    return this.booksService.getOneBook(parsedId);
  }

  @Post()
  async createNewBook(@Body() newBook: CreateBook): Promise<Book> {
    return this.booksService.save(newBook);
  }

  @Put('/:id')
  async updateBook(
    @Param('id') id: string,
    @Body() updatedBook: Book,
  ): Promise<Book> {
    const bookToBeSaved = { ...updatedBook, id: parseInt(id, 10) };
    return this.booksService.save(bookToBeSaved);
  }

  @Delete('/:id')
  async removeBook(@Param('id') id: string): Promise<void> {
    const parsedId = parseInt(id, 10);
    await this.booksService.removeBook(parsedId);
  }
}
