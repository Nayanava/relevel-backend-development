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

/*

*****
****
***
**
*

*/
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
// n = a * b -> if it is composite
/*
    number = a * b;
    b = number / a;
    25 is a composite number or a prime number.
    a = 2;
    25 % 2 === 1 (b)12 * (a)2 + (remainder) 1
    a = 3;
    25 % 3 === 1, (b)8 * (a)3 + (remainder) 1
    a = 4;
    25 % 4 === 1, (b)6 * (a)4 + (remainder) 1

    a = 5;
    25 % 5 === 0, (b)5 * (a)5 + (remainder) 0

    25 % 6 === 1, (b)4 * (a)6 + remainder 1;

    25 % 7 ====, (b) 3 * a(7) + remainder 4;

    2, 3, 4, 5, ...... sqrt(n) n == sqrt(n) * sqrt(n);
                                        a       b

    
    17
    (b)4 * (a)4 + (remainder) 1 
    a = 5;
*/
for(let a = 2; a * a <= number; a++) {
    if(number % a === 0) {
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

/*

prime number - 17
17/2 = (integer)8 = 2 * 8 + 1;
3 * 5 + 2
4 * 4 + 1
5
6 * 2 = 12 + 5
n = a * b 
n = a * b
==> n = b * a
*/

/*

to find whether a number is prime or composite
we say it has to have factors which is greater than 1 and 
less than the number itself.

n = a * b where (a, b) Belongs To (2, n-1);
we have constraint on a, no constraints on b
we start incrementing a from 2.
how far should we increment??
    sqrt(n) * sqrt(n) == n;
     a          b
    if (a > sqrt(n))
       then  b will be less than sqrt(n)
    because if both numbers are greater than sqrt(n)
    then a * b > n

    at least one of the factors should be less than sqrt (n)

    a = 2 to sqrt(n);
    if a > sqrt(n) then b < sqrt(n)
    we would have checked for every value between 2 to sqrt(n)
    2, 3, 4, 5, 6, .... 10. now if a = 11, b <= 10

*/