import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import { IBook } from './interfaces/book.interface';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findItem(id: string): Promise<Book> {
    return this.bookModel.findById(id).exec();
  }

  async create(book: IBook): Promise<Book> {
    const createdBook = new this.bookModel(book);
    return createdBook.save();
  }

  async update(id: string, data: IBook): Promise<Book> {
    return this.bookModel.findOneAndUpdate({ _id: id }, data);
  }

  async delete(id: string): Promise<Book> {
    return this.bookModel.findByIdAndRemove(id).exec();
  }
}
