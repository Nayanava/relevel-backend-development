//----- CHECK IF A NUMBER IS ODD OR EVEN---------
let number = 10;
if(/* our condition goes in here*/ number % 2 === 0) {
    console.log(`${number} is even`)
} else {
    console.log(`${number} is odd`)
}

//FIND THE MAXIMUM OF TWO NUMBERS

let var1 = 10, var2 = 13;
if(var1 > var2) {
    console.log(`${var1} is the maximum`)
} else {
    console.log(`${var2} is the maximum`)
}

//------ IF ELSE-IF ------------

// FINDING THE MAXIMUM OF THREE NUMBERS

let num1 = 6, num2 = 8, num3 = 10;

// if -> num1 > num2 as well as num1 > num3
//       -> num1 is the maximum
//else if -> num2 > num1 && num2 > num3
//        -> num2  is the maximum
//else -> num3 is maximum

if(num1 > num2 && num1 > num3) {
    console.log(`${num1} is maximum`)
} else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is maximum`)
} else {
    console.log(`${num3} is maximum`)
}

// --------- NESTED IF ELSE------------

/*
    if () {
        if() {
            if() {

            }
            else {

            }
        }
        else {

        }
    } else {
        if() {

        }
        else {

        }
    }
*/
// ----- MAXIMUM OF THREE NUMBERS WITH NESTED IF ELSE -----
// 10, 12, 9
num1 = 9;
num2 = 10;
num3 = 12;
if(num1 > num2) {
    if(num1 > num3) {
        console.log(`${num1} is maximum`)
    } else {
        console.log(`${num3} is maximum`)
    }
} else {
    if(num2 > num3) {
        console.log(`${num2} is maximum`)
    } else {
        console.log(`${num3} is maximum`)
    }
}

//--------SWITCH STATEMENTS-------------
var today = 'Tuesday';

switch(today) {
    case 'Monday':
        console.log('Chest Day');
        break;
    case 'Tuesday':
        console.log('Back Day');
        break;
    case 'Wednesday':
        console.log('Shoulders');
        break;
    case 'Thursday':
        console.log('Leg day');
        break;
    case 'Friday':
        console.log('Arms day');
        break;
    case 'Saturday':
        console.log('Weak muscle groups and Abs day');
        break;
    default:
        console.log(`We don't train on other days`)  
}

//-------- TERNARY OPERATORS -----------
//FIND MAXIMUM OF TWO NUMBERS
// is var1 > var2 ? var1 : var2
const maximum = var1 > var2 ? var1 : var2;
console.log(`${maximum} is maximum`)

// FIND IF NUMBER IS ODD OR EVEN
number % 2 === 0 ? console.log('EVEN') : console.log('ODD')
//console.log(`${number} is ${typeOfNumber}`)


// //Maximum of three numbers
// const maximumOfThree = num1 > num2 && num1 > num3 ? num1 :
//         num2 > num1 && num2 > num3 ? num2 : num3;

// console.log(`${maximumOfThree} is the maximum`)

// //------------------------------------------------------//

// //------- ITERATIVES/ FOR LOOP -----------------
// console.log(`1`)
// console.log(`2`)
// console.log(`3`)
// console.log(`4`)
// console.log(`5`)
// console.log(`6`)
// console.log(`7`)
// console.log(`8`)
// console.log(`9`)
// console.log(`10`)

// // for loop has 3 parts
// //1. first part is a counter
// //2. the condition which will get evaluated every time, before the
// //      execution of the body of the loop

// //3. the incrementation of the counter.
// for(let counter = 1; counter <= 10; counter++) {
//     console.log(`inside for loop: ${counter}`)
// }

// // printing the multiplication table of 9
// /*
// 9 * 1 = 9
// 9 * 2 = 18

// */

// const multiplicationTableOf = 9
// for(let counter = 1; counter <= 10; counter++) {
//     console.log(`${multiplicationTableOf} * ${counter} = ${multiplicationTableOf * counter}`)
// }
