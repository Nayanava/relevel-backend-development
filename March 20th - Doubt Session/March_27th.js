
console.log(number);
var number = 10;
const square = function (num) {
    var ans = num * num;
    return ans;
}
console.log(square(15));
square = 10;
var squareOf10 = square(number);
var squareOf9 = square(9);



console.log(squareOf10 + " " + squareOf9 + " " + ans);


// Three steps
// 1. initialization
// 2. condition
// 3. Modification

// before the first iteration
// initialization of the variable happens 
// and the condition is evaluated

// after the first iteration
// modification gets triggered first
// condition gets evaluated.

// counter++ => counter = counter + 1;
// ++counter => counter = counter + 1;
for(let counter = 1; counter++ <= 10; ) {
    // first check counter <= 10 and then counter = counter + 1;
    console.log(counter);
}

console.log("Inside pre-increment of for loop")
for(let counter = 1; counter <= 10; counter++) {
    // first counter = counter + 1 and then check counter <= 10 ;
    console.log(counter);
}
// let counter = 1;
console.log("Inside while loop")
let counter = 1;
while (counter++ <= 10) {
    console.log(counter);
}