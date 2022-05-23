/*
List down features
1. register a user
2. user login
3. create book information
4. get some book
5. payment
6. 
7. inventory of the book
.
.
.
*/
const bookObj = require('./book');
const validator = require('validator');

console.log(validator.isEmail("nayanava@example.com"));
//console.log('inside app.js')
console.log(bookObj);
console.log(validator.isURL("http://google.com"));