"use strict";
exports.__esModule = true;
var util = require("./lib/utilityFunctions");
var printBookInfo = function (item) {
    console.log(item.title + " was authored by " + item.author);
};
var _a = util.GetAllBooks(), book1 = _a[0], book2 = _a[1];
printBookInfo(book1);
// printBookInfo({ id: 2, title: 'LA Lakers', author: 'LeBron', available: true, category: Category.Biography})
