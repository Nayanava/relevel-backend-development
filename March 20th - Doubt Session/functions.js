// // var a = 10;
// // function b() {
// //     c();
// //     function c() {
// //         console.log(a);
// //     }
// // }
// // b();
// // // GEC -> b -> c



// // // console.log(a);
// // // console.log(getNameOfClass);
// // // getNameOfClass();
// // // console.log(getNameUsingExpression);
// // // var a = 10;
// // // function getNameOfClass() {
// // //     console.log("Backend Development");
// // // }

// // // var getNameUsingExpression = function() {
// // //     console.log("Backend Development");
// // // }
// // // console.log(getNameUsingExpression);


// // // function introducingMyself() {
// // //     console.log('Hi my name is Nayanava!');
// // // }

// // // function add(x, y) {
// // //     return x + y;
// // // }

// // // //calling/running/invoking
// // // introducingMyself();
// // // let sum = add(3, 4);
// // // console.log(sum);
// // // console.log(`sum of 10 and 11 is ${add(10, 11)}`);

// // // var stringToNumber = Number('25');
// // // function compare(a, b) {
// // //     return a > b;
// // // }

// // // let a = 10, b = 20, c = 30;

// // // function addAndCompare(x, y, z) {
// // //     const sum = add(x, y);
// // //     return compare(sum, z);
// // // }

// // // //--------------------------Function Expressions-------------------

// // // const introduction = function () {
// // //     console.log('I am Nayanava');
// // // }

// // // const addUsingExpressions = function (a, b) {
// // //     return a + b;
// // // }

// // // console.log(addUsingExpressions(10, 11));
// // // console.log(typeof addUsingExpressions);


// // const counterIncrementer = function() {
// //     let counter = 0;
// //     return function() {
// //         counter++;
// //         console.log(`counter incremented to ${counter}`);
// //     };
// // };

// // const counterValue = counterIncrementer();
// // console.log(counterValue);
// // counterValue();
// // counterValue();
// // counterValue();


// var firstName = 'Nayanava';
// //variable declaration
// // 3 parts
// //1. type - let, const, var
// //2. name of the variable
// //3. value that is assigned to the variable.
// //var or a let - > reassign values to the variable.

// firstName = 'Sachin';

// let surname = 'De';
// surname = 'Mohammed'
// surname = 25
// console.log(firstName + " " + surname);

// console.log(surname)
// console.log(surname)
// console.log(surname)
// console.log(surname)
// //-----------------------------------
// //const variable;
// let variable;
// console.log(variable);
// //---------------------------------------
// // ternary operators

// // check if a number is even or odd

// let number = 10;
// const isNumberEven = (number % 2 === 0) ? true : false;
// console.log(isNumberEven);

// //------------Type Conversion && Type Coercion----------------
// let stringValue = '25';
// let stringToNumber = Number(stringValue);
// console.log(typeof stringToNumber + " " + typeof stringValue)

// const birthYear = '1990';

// const valueWithPlus = birthYear + 25;
// const valueWithMinus = birthYear - 25;
// const valueWithMultiplication = birthYear * 25;
// const valueWithDivision = birthYear / 25;

// console.log(valueWithPlus + " " + typeof valueWithPlus);
// console.log(valueWithMinus + " " + typeof valueWithMinus);
// console.log(valueWithMultiplication + " " + typeof valueWithMultiplication);
// console.log(valueWithDivision + " " + typeof valueWithDivision);
 

// console.log (25 - '5' + '18' - '20');
// console.log(5 + 4 * '25' - 2025 + '2025');
// // According to BODMAS - division has higher precedence than multiplication
// // addition has higher precedence than subtraction

// // DIV > MULTI > ADD > SUB
// //(DIV == MULTI) > (ADD == SUB)
// // left associative, right associative
// // 5 + 4 - 3 = 9 - 3 = 6
// // 3 - 4 + 5 = -1 + 5 = 4
// console.log(5 + 4 - 3);
// console.log(3 - 4 + 5);
// // 3 * 4 ** 2
// console.log(3 * 4 ** 2);

// //maximum of three numbers?
// let var1 = 5, var2 = 5, var3 = 4;
// let max;
// if(var1 > var2 && var1 > var3) {
//     max = var1;
// } else if(var2 > var1 && var2 > var3) {
//     max = var2;
// } else {
//     max = var3;
// }
// console.log("maximum of three " + max)

// max = var1 > var2 && var1 > var3 ? var1 :
//         var2 > var1 && var2 > var3 ? var2 : var3;

// console.log('Maximum of three using ternary ' + max);

// function maxOf2(a, b) {
//     return a > b ? a : b;
// }
// var maximumOf2 = maxOf2(var2, var3);
// var maxOf3 = maxOf2(var1, maximumOf2)
// console.log(maxOf3)

// //----------------------------------------------

// // for(let i = 0; i < 10; i++) {
// //     if(i == 5) {
// //         break;
// //     }
// //     console.log(i);
// // }
// // console.log("encountered a break");


// for(let i = 0; i < 10; i+=2)
//  {
//     if(i === 6) {
//         continue;
//     }
//     console.log(i);
// }

//---------------FUNCTIONS----------------------

//1. function declaration

function functionName(functionParameter1, functionParameter2) {
    //body of the function
    //in our case we want to add the two parameters
    const product = functionParameter1 * functionParameter2;
    return product;
}

let functionArgument1 = 5, functionArgument2 = 6;
const result = functionName(functionArgument1, functionArgument2);
console.log(`${result}`);


// //-----------------------------------------------------------------

// let product = function (a, b) {
//     return a * b;
// }

// product = 23
// console.log(product(4, 5));


const temperature = 23;
const isRaining = true;
//&& -> and 
// if temperature >= 20 and temperature <= 25 && it is not raining -> go out to play
if(temperature >= 20 && temperature <= 25 && !isRaining) {
    console.log("Go out and play in the park");
} 
//if temperature >= 18 and temperature <= 20 and it is raining -> stay inside play school
else if(temperature >= 18 && temperature <= 20 && isRaining) {
    console.log("Stay inside the play school");
}
//in any other condition please stay at home!! 
else {
    console.log("Please stay at home!");
}



//---------------Validate Marks Using Ternary Operator---------------

let marks = 39;
let userResult = (marks >= 40) ? 'pass' : 'fail';
console.log(userResult);

//------------- Validate Number is Positive/Negative/Zero

let userInput = 10;
// if(userInput > 0) {
//     console.log("Positive");
// } else if(userInput < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero")
// }

let userInputResult = userInput > 0 ? 'Positive' : userInput < 0 ? 'Negative' : 'Zero';
console.log(userInputResult);


let num = -10;

switch (num){
    case (num < 0):
        console.log("Number is Negative");
        break;

    case (num === 0):
        console.log("Number is Zero");
        break;

    default:
        console.log("Number is Positive")
}

/*
*
**
***
****
*****
*/
for(i = 1; i <= 5; i++) {
    let starString = '';
    for(let count = 1; count <= i; count++) {
        starString += '*';
    }
    console.log(starString);
}


for(i = 5; i >= 1; i--) {
    let starString = '';
    for(let count = 1; count <= i; count++) {
        starString += '*';
    }
    console.log(starString);
}


/*

2**3 = 2 * 2 * 2 = 8
4**3 = 4 * 4 * 4 = 64

x*x*......y

*/
/*

*****
****
***
**
*

*/


x = 2, y = 3;
x = 4, y = 5;

// x^3 or x**3 
//prod = 1*x,
function power(x, y) {
    let prod = 1;
    for(let i = 1; i <= y; i++) {
        prod *= x;
    }
    return prod;
}

console.log(0**0 + " " + power(3,0));

//-------------------------------------------------------------------------------------
/*


12 -> 2, 6, 3, 4
12/2 = 6
1, 2.......6, (7)
12 -> 6 -> (7 * 2 = 14) 
*/
//Find if a number is prime or not.
let number = 97;
let isPrime = true;
for(let factor = 2; factor * factor <= number; factor++) {
    if(number % factor === 0) {
        isPrime = false;
        break;
    }
}

if(isPrime) {
    console.log("Prime Number");
} else {
    console.log("Composite Number");
}

// I want you to find all prime numbers between 1 to 100
