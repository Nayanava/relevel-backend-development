// console.log("Class of April 1st")

// /*
// // operators
// 1. arithmetic operators
// /, *, +, -, %, **
// Precedence rules - * and / have same precedece
//  ** > (* == /) > (+ == -)

// Associativity -> whenever two operators have the same
// precedence, then associativity decides which operator
// will be evaluated first.

// * and / follow the left associativity order
// + and - they follow the left associativity order.

//  4 * 5 / 2 + 3 - 7 
//  = 20 / 2 + 3 - 7
//  = 10 + 3 - 7
//  = 13 - 7
//  = 6

//  4 / 2 * 5 - 3 + 7 = 14
//  2 * 5 - 3 + 7
//  10 - 3 + 7
//  7 + 7
//  = 14

//  7 + 3 - 4 * 5 / 2 
//  = 7 + 3 - 20 / 2
// = 7 + 3 - 10
// = 10 - 10 = 0

// 7 * 2 ** 3 + 4 
// = 7 * 8 + 4
// = 56 + 4
// = 60
// */

// /*
// 7 + 3 - 4 * 5 % 3 (left associative)
//     7 + 3 - 20 % 3
//     7 + 3 - 2 = 8

// 7 + 3 - 4 * 5 % 3 (right associative)
//     7 + 3 - 4 * 2
//     7 + 3 - 8
//     10 - 8 = 2

//     7 + 3 - (4 % 5) * 3
//     7 + 3 - 4 * 3
//     7 + 3 - 12
//     10 - 12
//     -2

//     I am trying to divide any number by n
//     if number < n, then number % n === number

//     modulo by 5 then modulo of (0-4) % 5 = (0-4)
// */
// console.log(7 + 3 - 4 % 5 * 3);

// /*
// Assignment Operators
// =, +=, -=, *=, /=, %=, **=
// a = 20, b = 20;
// a += 10 -> a = a + 10; 30;
// a -= 10 -> a = a - 10; 20
// a *= 10 -> a = a * 10; 200
// a /= 10 -> a = a / 10; 20
// a %= 10 -> a = a % 10; 0

// */

// let a = 2;
// console.log(a **= 3);

// /*
// Incrememnt Decrement
// pre-increment
// a++; => a = a + 1;
// a = 10;
// b = ++a => b = ? and a = ?
// ++a => first a = a+1 then assigment b = a;
// b = a++ => first assignment then increment
// b = 10, a = 11;
// a++ -> a = a + 1;
// ++a -> a = a + 1;
// */

// /*
// Relational Operators
// <, >, <=, >= 
// -> result of relational operators are 
// -> 10 < 15 -> true
// -> 10 <= 15 -> true
// -> 10 > 15 -> false
// -> 15 >= 15 -> true;
// -> 15 > 15 -> false
// */

// /*
// Coercion -> +, -, comparison, the operation is happening where two different
// datatypes are involved

// "+" -> if the + operator sees a string then it will automatically type
// convert everything else to string and then concatenate

// */

// console.log('15' + 1 - '20' + true - '100' / 10 - false);
// /*
//     15 + '1' - '20' + true - 10 - false
//     151 - '20' + true - 10 - false
//     131 + false - 10 - true -> 131 + 0 - 10 - 1 = 120
//     132 - 10 - false
//     '122' - false
//     122 - 0
//     '131true' -> NaN
// */

// /* 
// equality operators
// 1. loose equality - javascript will internally type coerce '12' == 12 -> true
// 2. strict equality - it will not type coerce - first check the data types 
// and only then check the value.

// 1. inequality operator
// 1. loose and strict 
// !=       and !== 

// 12 != '12' -> false
// 12 (number) !== '12' (string) -> true

// */

// /* 
// unary operators -> +, !, -, typeof
// typeof -> will tell us the data type of the value
// ! -> truthy and falsy
// if(!'hello') -> false
// if(!0)-> true

// 5 falsy values -> 0, NaN, undefined, '', null
// if(0) -> 

// +'' -> it tries to convert anything to a number if it is
// not already a number?
// +'false' -> 0 'false' -> false -> 0
// +'hello' -> NaN
// +true

// 10 === +'10'
// */

// /*
//     if else -> conditional statements 
//     if(valid condition) {
//         //body of if will be executed
//     } else {
//         //body of else will be executed
//     }

//     if() {
//         if() {

//         } else {

//         }
//     } else {
//         if() {

//         }
//         else {

//         }
//     }

// */

// var character = 'a';

// switch (2) {
//     case '1':
//         console.log("One");
//     case '2':
//         console.log("Two");
//     case 2:
//         console.log('2 in number');
//     default:
//         console.log("Default");
//         break;
// }

// //ternary operator

// const eval = (a > b)? a : b; //condition ? true : false

// do {
//     //body of do while
// } while(condition)

/*
1. global
2. local - function
3. script
4. block
*/

// if(a === 10) {
//     let letVariable = 30;
//     const constVariable = 20;
//     //a = 20;
//     d = 30;
//     //console.log(a);
//     // console.log(letVariable);
//     // console.log(constVariable);
//     let b = 10;
//     const c = 20;
// }

console.log(a);
a = 5;
let b = 20;
const c = 30;
func();
console.log(a);

function func() {
    {
        a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }
    console.log(a);
    console.log(b);
    console.log(c);
}

function increment() {
    let counter = 0;
    return function () {
        counter++;
        console.log(counter);
    }
    //return counter++;
}

var functionVariable = increment();
console.log(functionVariable);
functionVariable();
functionVariable();
functionVariable();
