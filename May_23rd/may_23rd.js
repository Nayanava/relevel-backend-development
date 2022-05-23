/* 1st node.js program 
//devmgmt.msc
console.log('Hello World!!'); // - 1 ns
//if I do some network operation - 10 ms - 
console.log('network operation completed'); // - 1ns

// 1 ns + 1ns + 1ns 

*/
const fs = require('fs');
console.log('starting');

// setTimeout(() => {
//     console.log("Timer completed after 2 seconds")
// }, 2000);

// fs.writeFile('./async.txt', 'Validating asynchronous code', () => {
//     console.log("File has been printed asynchrnously");
// });

setTimeout(() => {
    console.log("Timer completed immediately");
}, 0);
setImmediate(() => {
    console.log("Called inside set Immediately");
})
console.log('stopping');

/*
A. starting, immediate, stopping, timer completed - true
B. - starting, stopping, immediate, timer completed - false
C. - starting, stopping, timerCompleted, immediate
D - none of the above.
*/

// email address - [A-Z,a-z,0-9]*@example.com
//"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"