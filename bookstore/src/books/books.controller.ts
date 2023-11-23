import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Book, CreateBook } from './book';
import { BooksService } from './books.service';
import {
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { NumberParameter } from './number-parameter';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
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
  async getOneBook(@Param('id', ParseIntPipe) id: number): Promise<Book> {
    const data = await this.booksService.getOneBook(id);

    if (data === null) {
      throw new NotFoundException();
    }
    return data;
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
  @HttpCode(204)
  async removeBook(@Param() params: NumberParameter): Promise<void> {
    const parsedId = parseInt(params.id, 10);
    await this.booksService.removeBook(parsedId);
  }
}
