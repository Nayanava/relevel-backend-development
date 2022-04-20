//------ Anonymous functions--------------
/*
Anonymous functions are functions which do not have a name.
function statements and function declarations are the same thing.

When we say a function expression, it means that we are assigning a function
to a variable. Now what what do variables store?? - values.

So we use anonymous functions when we need to pass a function as a value.
*/

const anonymousFunc = function anoFunc() {
    console.log('This is an anonymous function');
}

anonymousFunc();

//------------Arrow Functions------------------

// function square(x) {
//     return x * x;
// }


/*
in order to declare an arrow function
we need to first take an anonymous function
remove the function keyword from the beginning of the function
and replace it with arrow (=>) after the parenthesis
*/
const square = (x) => {
    return x * x;
}
console.log("arrow function " + square(3));

//concise arrow function
// arrow functions are like if, for, while statements
// they expect a single line.
//but when we have multiple statements, we first enclose them
//in curly braces and then pass it as a single statement.

const squareConcise = (x) => x*x;
console.log("concise arrow function " + squareConcise(3));
eventName = 'default event name';
const birthdayEvent = {
    eventName: `Pratik's birthday`,
    guestList: ['Samik', 'Rehan', 'Pratik'],
    printEventNameFunction: function () {
        console.log(this);
        console.log(`Name of the event is ${this.eventName}`);
    },
    printEventNameArrow: () => {
        console.log(this);
        console.log("Name of the event is " + this.eventName);
    }
}
birthdayEvent.printEventNameFunction();
birthdayEvent.printEventNameArrow();

//creating objects using functions
function CreateEvent(eventName, guestList) {
    this.eventName = eventName;
    this.printEventNameFunction = function () {
        console.log(this);
        console.log(`Name of the event is ${this.eventName}`);
    };
    this.printEventNameArrow = () => {
        console.log(this);
        console.log("Name of the event is " + this.eventName);
    }
}

const newBirthdayEvent = new CreateEvent('New Birthday Event', []);
newBirthdayEvent.printEventNameArrow();
newBirthdayEvent.printEventNameFunction();

// Arrow functions are not suitable to be used as methods.
// What are methods - functions that are defined as properties
//of an object.

const sq = (x) => {console.log(x*x)};
console.log(sq(3));

//----Immediately Invoked Function Expressions-----
/*
IIFE- are functions that are disappear right after its called once,
it is immediately executed as soon as it is defined.
*/
function invokeOnce () {
    var insideLocalScopeVariable = 10;
    console.log('This will never be used again');
}
invokeOnce();
invokeOnce();

/*
first create a function statement without a function name. - this will SE
in-order to convert it to a function expression, wrap it inside
parenthesis - this becomes a function expression.
inorder to invoke the function use - () - that's how we invoke any function;
*/
const result = (function (x) {
    return x * x;
})(3);
console.log(result);

// write a normal arrow function, wrap it in (), invoke using (args);
const sqResult = ((x) => x * x)(3);
console.log(sqResult);


function maxOfThree(a, b, c) {
    return max(a, max(b, c));
}

function max(a, b) {
    return a > b ? a : b;
}

//----- Higher Order Functions ------------
/*
functions which take in functions as parameters
or returns functions as output
or both..
*/

//1. passing functions as parameters to another function

/*
there is a new batch of students 
who are joining Relevel Cohort - 5.
We want to write a program which greets each of the new students
joining the class
*/


function greetingMessage(studentName) {
    console.log(`Hello and welcome to Relevel Cohort - 5, ${studentName}!`);
}

/*
A callback function is a function passed into another function as an argument,
which is then invoked inside the outer function to complete some kind of routine
or action.
*/
function greetStudent(callback) {
    console.log(callback);
    //const studentName = prompt('Please enter your name');
    const studentName = 'Stop eating my brain';
    const message = callback(studentName);
    return message;
}

// function greetStudentAsync(callback) {
//     setTimeout(callback('Rahul'), 5000);
// }

//greetStudentAsync(greetingMessage);
greetStudent(function (studentName) {
    console.log(`Hello and welcome to Relevel Cohort - 5, ${studentName}!`);
});

greetStudent((studentName) => {
    console.log(`Hello and welcome to Relevel Cohort - 5, ${studentName}!`);
});

//--------------Returning function from inside a function -------------


function increaseCount () {
    let counter = 0;
    return () => {
        return ++counter;
    }
}

const counterValue = increaseCount();
console.log(counterValue());
console.log(counterValue());
console.log(counterValue());

//--------------------Array Methods which are HOF's-------------------------

//---- forEach --------
const arr = [1, 2, 3, 4, 5, 6]


function printElement (element) {
    console.log(element);
}
arr.forEach(printElement);
arr.forEach(function (element) {
    console.log(element);
})
arr.forEach((element) => console.log(element));

// -------- Map method ------------

//Double every element in the array
const doubledArray = arr.map(element => element * 2);
console.log(doubledArray);
//Triple every element in the array

const tripledArray = arr.map(element => element * 3);
console.log(tripledArray);

//--------- Filter method ------------

// filter elements based on even numbers..

function isEven(number) {
    return number % 2 === 0;
}

const evenArray = arr.filter(isEven);
console.log(arr.map(isEven));
console.log(evenArray);

console.log(arr.filter(element => element % 2 === 0));

//--------- Reduce method --------------
/*
1. add all the elements in the array
2. find the maximum element in the array.
*/

function sum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log('Sum of arr = ' + sum(arr));

/*
Takes two parameters
1. a callback function which takes in two parameters
    1.1 the element which stores the overall result or the accumulated result
    1.2 the current element in the array.
2. the initial value of the accumulator
*/
const totalSum = arr.reduce(function (sum, curr) {
    sum += curr;
    return sum;
}, 0);
console.log(totalSum);

console.log(arr.reduce((maxi, curr) =>  max(maxi, curr), 0));

const users = [
    {firstName: "nayanava", lastName: "de", age: 32},
    {firstName: "samik", lastName: "sengupta", age: 32},
    {firstName: "rehan", lastName: "mohammed", age: 25},
    {firstName: "kaushal", lastName: "tiwari", age: 25},
    {firstName: "rahul", lastName: "sharma", age: 40}
];

// requirement 1 -> for each user in the array, 
// return the first name and the last name of the user
const names = users.map(user => user.firstName + " " + user.lastName);
console.log(names);

//group all users together by their age.
/*
 { 
    32: [
    nayanava de,
    samik sengupta
    ],
   25: [
       rehan mohammed,
       kaushal tiwari
   ],
    40: [Rahul Sharma]
}
*/

const usersGroupedByAge = users.reduce((userGroups, currUser, currentIndex) => {
    if(userGroups[currUser.age]) {
        userGroups[currUser.age].push(currUser.firstName + " " + currUser.lastName);
    } else {
        userGroups[currUser.age] = [currUser.firstName + " " + currUser.lastName];
    }
    return userGroups;
}, {});
console.log(usersGroupedByAge);
