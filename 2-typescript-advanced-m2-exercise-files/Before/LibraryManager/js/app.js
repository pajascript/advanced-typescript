"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var util = require("./lib/utilityFunctions");
var printBookInfo = function (_a) {
    var bookTitle = _a.title, bookAuthor = _a.author;
    console.log(bookTitle + " was authored by " + bookAuthor);
};
var _a = util.GetAllBooks(), book1 = _a[0], book2 = _a[1];
// printBookInfo(book1);
// REST PARAMETER
var logFavoriteBooks = function (_a) {
    var book1 = _a[0], book2 = _a[1], otherBooks = _a.slice(2);
    printBookInfo(book1);
    printBookInfo(book2);
    console.log(otherBooks);
};
// let { title: bookTitle,  author: bookAuthor } = book1;
// console.log(bookTitle);
// console.log(bookAuthor);
// logFavoriteBooks(util.GetAllBooks());
// printBookInfo({ id: 2, title: 'LA Lakers', author: 'LeBron', available: true, category: Category.Biography})
// SPREAD OPERATOR
var schoolBooks = [
    { id: 10, title: 'Mathematics', author: 'LeBron James', available: true, category: enums_1.Category.Children },
    { id: 11, title: 'Mathematics', author: 'LeBron James', available: true, category: enums_1.Category.Children },
    { id: 10, title: 'Mathematics', author: 'LeBron James', available: true, category: enums_1.Category.Children }
];
var booksRead = util.GetAllBooks();
booksRead.push.apply(booksRead, schoolBooks);
var poets = ['Shelley', 'Collins', 'Hughes00'];
var authors = __spreadArrays(['Tolstoy', 'Fitzgerald'], poets);
var catalogLocation = ['A 123.456', book1];
catalogLocation[2] = 'hello';
// UNION TYPE
var allBooks = util.GetAllBooks();
var allMagazines = util.GetAllMagazines();
var readingMaterial = allBooks[0];
var printTitle = function (_a) {
    var title = _a.title;
    console.log(title);
};
//  printTitle(allBooks[1]);
//  printTitle(allBooks[0]);
// INTERSECTION TYPE
var serialNovel = {
    id: 50,
    title: 'The Ugly Duck',
    author: 'JP',
    available: true,
    category: enums_1.Category.Biography,
    publisher: 'M&M'
};
console.log(serialNovel);
//# sourceMappingURL=app.js.map