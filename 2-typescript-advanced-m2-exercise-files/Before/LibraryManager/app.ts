import { Category } from './enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import * as util from './lib/utilityFunctions';

const printBookInfo = ({ title: bookTitle, author: bookAuthor }: Book) : void => {
    console.log(`${bookTitle} was authored by ${bookAuthor}`);
}

let [ book1, book2 ] = util.GetAllBooks();
// printBookInfo(book1);

// REST PARAMETER
const logFavoriteBooks = ([ book1, book2, ...otherBooks ]: Book[]) : void => {
    printBookInfo(book1);
    printBookInfo(book2);
    console.log(otherBooks);
}

// let { title: bookTitle,  author: bookAuthor } = book1;

// console.log(bookTitle);
// console.log(bookAuthor);

// logFavoriteBooks(util.GetAllBooks());
// printBookInfo({ id: 2, title: 'LA Lakers', author: 'LeBron', available: true, category: Category.Biography})

// SPREAD OPERATOR
let schoolBooks: Book[] = [
    { id: 10, title: 'Mathematics', author: 'LeBron James', available: true, category: Category.Children},
    { id: 11, title: 'Mathematics', author: 'LeBron James', available: true, category: Category.Children},
    { id: 10, title: 'Mathematics', author: 'LeBron James', available: true, category: Category.Children}
];

let booksRead = util.GetAllBooks();
booksRead.push(...schoolBooks);

let poets: string[] = ['Shelley', 'Collins', 'Hughes00'];
let authors: string[] = ['Tolstoy', 'Fitzgerald', ...poets]
// console.log(authors)

//TUPLE TYPE
// let catalogLocation: [string, Book] = ['A 123.456', book1]
// catalogLocation[2] = 'HELLO'

interface KeyValuePair<K, V> extends Array<K | V> {
    0: K;
    1: V;
}

let catalogLocation: KeyValuePair<string, Book> = ['A 123.456', book1];
catalogLocation[2] = 'hello';


// UNION TYPE
let allBooks: Book[] = util.GetAllBooks();
let allMagazines: Magazine[] = util.GetAllMagazines();

let readingMaterial: Book | Magazine = allBooks[0];

const printTitle = ({ title } : Book | Magazine) : void => {
    console.log(title)
}
//  printTitle(allBooks[1]);
//  printTitle(allBooks[0]);


// INTERSECTION TYPE
 let serialNovel : Book & Magazine = {
    id: 50,
    title: 'The Ugly Duck',
    author: 'JP',
    available: true,
    category: Category.Biography,
    publisher: 'M&M'
 }

 console.log(serialNovel)