import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { IBook } from './book.model';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() createBook: IBook) {
    return this.booksService.create(createBook);
  }

  @Get()
  async findAll(): Promise<IBook[]> {
    return this.booksService.findAll();
  }
}
