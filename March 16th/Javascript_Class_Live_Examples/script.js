
//----------------------DATA TYPES--------------
let firstName = 'nayanava'
23

//let firstName = 'nayanava'
/*
we will always use camelCase 
while naming our variables
firstName = first + name
firstName
first name of person
*/

const firstNameOfPerson = 'Nayanava'

//a-z,A-Z,0-9, _, $

const newFunction = 'function'
const htmlCssJs = 'frontEnd'
console.log(firstName)
console.log(firstName)
console.log(firstName)



console.log(typeof 23.2)
console.log(typeof 23)
console.log(typeof htmlCssJs)

let children;

let age = '23'
console.log("age after declaration: " + typeof age)
console.log(typeof children)

age = 23
console.log("age after reassignment: " + typeof age)
console.log(typeof null)

//--------------ARITHMETIC OPERATORS-----------------

const ageOfNayanava = 2022-1990
console.log(ageOfNayanava)
//2 ** 3 == 2 * 2 * 2 or 2 to the power 3
console.log(ageOfNayanava * 2, ageOfNayanava / 2, 2 ** 3)

const denominator = 8;
const numerator = 18;

console.log(numerator % denominator) 
// The value of any modulo operation will lie between
//0 and the denominator - 1

// if I am dividing by 8 - 0 to 7 as soon as it becomes 8 
//it will be 0

//1, 2, 3, 4, 5, 6, 7, 8 - 0 to (divisor/denominator - 1) 

//---------------ASSIGNMENT OPERATORS---------------

let x = 10 + 5;
x += 10; // x = x + 10
x *= 4; // x = x * 4
x += 1; // x = x + 1 = 101
x -= 2; // x = x - 2 = 99
console.log(x);

// -----------Increment && Decrement Operators----------

//let dec = x-- // dec = x and then x = x - 1
let dec = --x // first x = x - 1 and then dec = x
//x++ // x = x + 1

console.log(dec + " " + x);

let inc = ++x // first x = x+1 and then inc = x
inc = x++ // first inc = x and then x = x + 1
console.log(inc + " " + x)

//-------------Comparison Operators----------------
// <, >, <=, >= 
// compare leftOperand with rightOperand and 
// then generate a boolean
// leftOperand is what occurs on the left hand side of the operator
console.log(50 > 51);
console.log(50 > 50);
console.log(50 >= 50);
console.log(50 <= 50);

//------------TYPE CONVERSION AND COERCION-------------
//1. type conversion - manually converting the type of a variable
let myAge = '32';
console.log(typeof myAge)
console.log(Number(myAge))

const birthYear = '1990';
console.log(birthYear + 18);

console.log(Number("Hello World"))
//2. type coercion - JS automatically tries to change the type of 
//the value when two values are different in nature =>
// have different dataTypes;

firstName = 'Nayanava'
let lastName = ' De'
console.log(firstName + lastName)
console.log("birthYear" - 18)
console.log('2' * 3)


console.log('23' - '10' - 3)
console.log('23' / '2')

let n = '1' + 1; // '11'
n = n - 1; //string to number - '11' - (11 - 1)

console.log(n)
let checkVariableType = '10' + '4' - '3' - 2 + '5'
console.log(checkVariableType + " " + typeof checkVariableType) //1 + '5' == 15

//console.log(value)

//---------------Equality Operators--------------
// == and the other one is ===
console.log(12 == '12') // loose equality operator 
console.log(12 === '12') // strict equality operator

// We will always use strict equality, forget that you have loose
// equality

//!==, !=
console.log(12 != '12') //loose inequality - false
console.log(12 !== '12') // strict inequality - true