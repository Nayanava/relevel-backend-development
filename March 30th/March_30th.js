/*
given a number we have to find 
the sum of the digits of the number.

For example: if my number is 1234, then sum of digits is 10;
Input: 7877, -> 7, 8, 7, 7 -> then sum of digits = 29

sum = 0
7877 % 10 = 7, sum = sum + 7 = 7, 7877/10 = 787.7 -> parseInt(787.7) = 787
787 % 10 = 7, sum = sum + 7 = 14, 787/10 = 78.7 -> parseInt(78.7) = 78
78 % 10 = 8, sum = sum + 8 = 22, 78/10 = 7.8 -> parseInt(7.8) = 7
7 % 10 = 7, sum = sum + 7 = 29, 7/10 = 0.7 -> parseInt(0.7) = 0

we know we need a loop -> while()
*/

var number = '7877';
var sum = 0;
while(number) {
    // sum = sum + (number % 10);
    sum += number % 10;
    number = parseInt(number / 10);
}
console.log(sum)
// 0, "", NaN, undfined, null - falsy values

/*

Homework Question:: Count the number of digits in a given number
input - 7890, output - 4
input - 7142229, output - 7

*/

//-------------2. Distance to Office -------------------
/*

A man reaches his office `y` min late when he travels at x km/hr. 
If he travels at x+2 km/hr, he reaches the office `y-10` min early. 
Find the distance between his home and office, given the value of x and y.

1 hr - x;
60 mins - x;
1 min - x / 60 km


for condition 2 
1 hr - x+ 2;
60 mins - x + 2;
1 min - (x + 2)/60;
speed = distance / time;
distance = speed * time;

Let distance = d;
and usually he needs t time to reach office. 

d = (x/60)*(t + y); -> eq 1
d = ((x + 2)/60)* (t - (y - 10)) -> eq 2

(x * (t + y))/60 = ((x + 2) * (t - (y - 10)))/60;
xt + xy = xt - x(y-10) + 2t - 2(y - 10);

xy + xy - 10x - 2t + 2y - 20 = 0;
2xy - 10x + 2y - 20 = 2t;
t = xy + y - 5x - 10;
t = y(x + 1) - 5(x + 2);

*/

var x = parseInt(window.prompt("Enter x: "))
var y = parseInt(window.prompt("Enter y: "))


let time = calculateTime(x, y);
console.log(calculateDistance(x, y, time));

//first let's calculate time;
function calculateTime(x, y) {
    return y * (x + 1) - 5 *(x + 2);
}

function calculateDistance(x, y, time) {
    return (x * (time + y))/60;
}

// ----------------Finding the HCF of two numbers----------------
/*
HCF - Highest Common Factor
GCD - Greatest Common Divisor

10, 15
10 - 1, 2, 5, 10
15 - 1, 3, 5, 15

ans - 5.
10 - 1, 2, 5, 10
20 - 1, 2, 4, 5, 10, 20

ans - 10

10, 15

15 - 10 = 5, 10
10 - 5 = 5
5, 5

20, 10

20 - 10 = 10;
10, 10 = 10

3, 10, HCF = 1

10 - 3 = 7, 3; 
7 - 3 = 4, 3;
4 - 3 = 1, 3;
3 - 1 = 2, 1;
2 - 1 = 1, 1;
1 && 1 = 1

--> Euclidean Algorithm for finding the GCD
*/

var firstNumber = parseInt(window.prompt("Enter first number :"))
var secondNumber = parseInt(window.prompt("Enter second number :"))


console.log(`GCD is ${GCD(firstNumber, secondNumber)} for inputs ${firstNumber} and ${secondNumber}`);

function GCD(firstNumber, secondNumber) {
    while(firstNumber !== secondNumber) {
        if(firstNumber > secondNumber) {
            firstNumber -= secondNumber;
        } else {
            secondNumber -= firstNumber;
        }
    }
    return firstNumber;
}

/*
    10, 15;
    15 % 10 = 5;
    10 % 5 = 0;

    3, 10;
    10 % 3 = 1;
    3 % 1 = 0
*/

// -------- LCM of two numbers ------------

/* Lowest Common Multiple */
// LCM of two numbers -> (number1 * number2) / HCF(number1, number2)
/*
    two numbers a and b -> LCM (5, 10) -> 10;
    we start checking with the greater number
    till we don't satisfy the condition
    lcm = x > y ? x : y;
    if(lcm % x == 0 && lcm % y == 0) {
        return lcm;
    }
    lcm += 1;

    3, 5 -> 
    lcm = 5, lcm = 6; lcm = 7; 8, 9, 10, 11, 12... 15

*/

var x = 3, y = 5;

function lcm(x, y) {
    let lcm = x > y ? x : y;
    while (lcm < (x * y)) {
        if(lcm % x === 0 && lcm % y === 0) {
            break;
        }
        lcm++;
    }
    return lcm;
}

function lcmUsingHcf(num1, num2) {
    return num1 * num2/ GCD(num1, num2);
}


// ----------------- Finding the sum of Inner Digits -----------------
/*
    The Inner digits of the number 2124 are 1 and 2 whose sum is 3

    first division - 212 - 2 - 
    21 -> sum = 2;
    2 -> sum = 1;
    let sum = 0;
    //each digit (1- 9), 10 - 2 digits -> 
    // a number having only 1 digit has to be less than 10
    while(number >= 10) {
        sum += (number % 10);
        number = parseInt(number / 10);
    }

    return sum;

    take all digits except the first and the last one
    number = parseInt(number / 10);
    by the time we reach the first digit 
    number is left with only 1 digit - (1 - 9)

    while( number >= 10) {
        sum += ()
    }

    12 -> 1

*/


var num = 2124;
let sum = 0;
num = parseInt(num / 10); // 2124 / 10 == ParseInt(212.4) = 212

/*
2124, 212, 21, 2
 1 - 9
*/
while(num >= 10) {
    sum += (num % 10);
    num = parseInt(num/10);
}
console.log(sum);

//-------- Fibonacci series ---------------

/*
    every new number that is generated is the sum of the last two numbers
    0, 1 -> 2nd number = 1,
    3rd number = 1st + 2nd, = 2
    4th number = 2nd + 3rd = 1 + 2 = 3
    .
    .
    .
    .
    .
    nth number = (n-1)th + (n-2)th number
    first = 0, second = 1;
    for third, previous = second and prev to prev = first;
    for fourth, previous = third, prev to prev = second;
    for fifth = fourth and third
*/



function nthFibonacci(n) {
    const firstNumber = 0, secondNumber = 1;
    if( n == 1 ) {
        return firstNumber
    }
    if( n == 2) {
        return secondNumber;
    }

    let previous_to_previous = firstNumber, previous = secondNumber;
    
    // a + b and b
    for(let x = 3; x <= n; x++) {
        //let temporary = previous;
        let current = previous + previous_to_previous
        previous_to_previous = previous;
        previous = current;
    }
    return previous;
}

//0, 1, 1, 2, 3, 5, 8, 13
console.log(nthFibonacci(7))

    //8th fibonacci

    /*
        prev_to_prev = 0, prev = 1
        3rd number - 

    */

// Using brackets is called the literal syntax
const friends = ['Nayanava', 'Suraksha', 'Hello World'];
console.log(friends);


const years = new Array(1991, 1984, 2008, 2020);
