import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BooksService } from './books.service';
import { IBook } from './book.model';
import { Book } from './book.schema';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Post()
  async create(@Body() createBook: IBook) {
    return this.booksService.create(createBook);
  }

  @Get(':id')
  async findItem(@Param() { id }): Promise<Book> {
    return this.booksService.findItem(id);
  }

  @Put(':id')
  async update(@Param() { id }, @Body() data: IBook): Promise<Book> {
    return this.booksService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param() { id }): Promise<Book> {
    return this.booksService.delete(id);
  }
}
