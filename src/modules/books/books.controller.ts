import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes } from "@nestjs/common";
import { JwtAuthGuard } from "../../common/guards/jwtAuth.guard";
import { ValidationPipe } from '../../common/pipes/validation/validation.pipe';
import { BooksService } from './books.service';
import { BookDto } from './dto/book.dto';
import { Book } from './schemas/book.schema';

@UseGuards(JwtAuthGuard)
@Controller('api/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createBook: BookDto) {
    return this.booksService.create(createBook);
  }

  @Get(':id')
  async findItem(@Param() { id }): Promise<Book> {
    return this.booksService.findItem(id);
  }

  @Put(':id')
  async update(@Param() { id }, @Body() data: BookDto): Promise<Book> {
    return this.booksService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param() { id }): Promise<Book> {
    return this.booksService.delete(id);
  }
}
