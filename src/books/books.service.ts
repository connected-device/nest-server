import { Injectable, HttpException } from '@nestjs/common';
import { BOOKS } from '../mocks/books.mock';

@Injectable()
export class BooksService {
    books = BOOKS;

    getBooks(): Promise<any> {

        // const low = require('lowdb')
        // const FileSync = require('lowdb/adapters/FileSync')

        // const adapter = new FileSync('db.json')
        // const db = low(adapter)

        // // // Set some defaults (required if your JSON file is empty)
        // // db.defaults({ posts: [], user: {}, count: 0 })
        // //     .write()

        // // // Add a post
        // db.get('posts')
        //     .push({ id: 2, title: 'lowdb is awesome - new' })
        //     .write()

        // // // Set a user using Lodash shorthand syntax
        // // db.set('user.name', 'typicode')
        // //     .write()

        // // // Increment count
        // // db.update('count', n => n + 1)
        // //     .write()


        return new Promise(resolve => {
            resolve(this.books);
            // resolve(db.get('posts'));
        });
    }
    getBook(bookID): Promise<any> {
        let id = Number(bookID);
        return new Promise(resolve => {
            const book = this.books.find(book => book.id === id);
            if (!book) {
                throw new HttpException('Book does not exist!', 404);
            }
            resolve(book);
        });
    }
    addBook(book): Promise<any> {
        return new Promise(resolve => {
            this.books.push(book);
            resolve(this.books);
        });
    }
    deleteBook(bookID): Promise<any> {
        let id = Number(bookID);
        return new Promise(resolve => {
            let index = this.books.findIndex(book => book.id === id);
            if (index === -1) {
                throw new HttpException('Book does not exist!', 404);
            }
            this.books.splice(1, index);
            resolve(this.books);
        });
    }
}