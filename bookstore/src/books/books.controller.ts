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
import {
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @ApiOperation({ summary: 'Get all books' })
  @ApiResponse({
    status: 200,
    description: 'Get all books',
    type: Book,
    isArray: true,
  })
  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.booksService.getAllBooks();
  }

  @ApiOperation({ summary: 'Get one book' })
  @ApiResponse({
    status: 200,
    description: 'Get one book',
    type: Book,
    isArray: false,
  })
  @ApiNotFoundResponse({ description: 'if a book is not found' })
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
