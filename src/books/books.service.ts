import { Injectable } from '@nestjs/common';
import { IBook } from './book.model';

@Injectable()
export class BooksService {
  private _books: IBook[] = [];

  findAll(): IBook[] {
    return this._books;
  }

  create(book: IBook): IBook {
    this._books.push(book);
    return book;
  }
}
