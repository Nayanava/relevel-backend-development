/*
Important - http://callbackhell.com/
*/

/* Node.js code */

// const fs = require('fs');
// console.log("Start");
// fs.readFile("./class_note.txt", () => {
//     console.log("Read the file!");
// });

// console.log("End!");

//Browser Specific - Synchronous

// console.log('start');

function add(a, b) {
    const sum = a + b;
    return sum;
}

// console.log(add(3, 4));
// console.log('end');

// ------ Async Call Stack --------
// console.log('start');

// function add(a, b) {
//     const sum = a + b;
//     return sum;
// }
// var a = 10, b = 20;
// setTimeout(() => {
//     console.log(add(3, 4));
// }, 10000);
// console.log('end');

//--- university result code to understand callback hell----
//login validation
// setTimeout(() => 
// {
//     console.log("Student logged in successfully");
//     //fetch Student details
//     setTimeout(() => 
//     {
//         console.log("Student information fetched successfully");
//         //fetch result
//         setTimeout(() => 
//         {
//             console.log("Fetched result successfully");
//         }, 3000);
//     }, 2000)
// }, 2000);

//--- setTimeout with parameter ---
//setTimeout()
//console.log("Hello", "my", "name", "is");

const result = setTimeout((a, b) => {
    console.log(add(a, b));
}, 2000, 5, 10, 15);

clearTimeout(result);

const interval = setInterval(() => {
    console.log("Interval execution");
}, 1000);

setTimeout(() => clearInterval(interval), 5000);