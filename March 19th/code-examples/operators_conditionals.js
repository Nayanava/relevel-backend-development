//----------- SIMPLE IF/ELSE STATEMENT-----------------
// FIND ODD AND EVEN
let number = 11;
if(/*then we write our construct inside */ number % 2 === 0) {
    // people often tend to avoid using curly braces 
    //when it is a one line statement, but always make sure
    //to use curly braces while writing if else statements
    //because it make the code more readable.
    console.log(`${number} is even`)
} else {
    console.log(`${number} is odd`)
}

// FIND THE MAXIMUM OF TWO NUMBERS

let var1 = 5, var2 = 6;

if(var1 > var2) {
    console.log(`${var1} is greater than ${var2}`)
} else {
    console.log(`${var2} is greater than ${var1}`)
}

//----------------- IF/ELSE IF/ELSE--------------------

let num1 = 7, num2 = 5, num3 = 6

if(num1 > num2 && num1 > num3) {
    console.log(`${num1} is the largest`)
} else if(num2 > num1 && num2 > num3) {
    console.log(`${num2} is the largest`)
} else {
    console.log(`${num3} is the largest`)
}

//-------------NESTED IF ELSE-------------------------

if(num1 > num2) {
    if(num1 > num3) {
        console.log(`${num1} is the largest`)
    } else {
        console.log(`${num3} is the largest`)
    }
} else {
    if(num2 > num3) {
        console.log(`${num2} is the largest`)
    } else {
        console.log(`${num3} is the largest`)
    }
}

//--------------SWITCH STATEMENT----------------

let today = 'Mars Day';

switch(today) {
    case 'Monday':
        console.log('Chest day');
        break;
    case 'Tuesday':
        console.log('Back day');
        break;
    case 'Wednesday':
        console.log('Shoulders day');
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

//--------------TERNARY OPERATOR----------------------

// ODD OR EVEN
const typeOfNumber = number % 2 === 0 ? 'Even' : 'Odd'
console.log(typeOfNumber)

// MAXIMUM OF TWO NUMBERS
const maximum = var1 > var2 ? var1 : var2
console.log(`${maximum} is the larger of the two`)


//MAXIMUM OF THREE NUMBERS
const maximumOfThree = 
    (num1 > num2 && num1 > num3) ? num1 : 
        (num2 > num1 && num2 > num3) ? num2 : num3;

console.log(maximumOfThree)