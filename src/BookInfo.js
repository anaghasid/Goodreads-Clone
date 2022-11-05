// Requiring users file
const users = require("./Books");
// console.log(users[0]);
var bookname = new Array();
var author = new Array();
var description = new Array();
for(let i = 0; i < users.length; i++)
{
    bookname[i] = users[i].Book;
    author[i] = users[i].Author;
    description[i] = users[i].Description;
}


