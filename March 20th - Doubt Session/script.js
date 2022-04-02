console.log('script is loading')
console.log(`let's see if this line prints`)
console.log('hello')

console.log(4 + 5)

// !, +, -, typeof
console.log( -'hello')
console.log(!'')

var one;
var two = 'A'
switch (two) {
    case 'A':
        one += '10';
        break;
    default:
        one += '0'
}
console.log(one)


var i = 2, j = 2, k = 0;
if(i == j) {
    console.log(i)
} 

// if my input is 0, then add 10 first, for all cases add 5 to the input

let input = 0;

if(input === 0) {
    input += 10
}

input += 5;
console.log(input)

// if(i > 1) {
        //     break;
        // }

// nested for loop...
/*
2 -> condition evaluation
3 -> updation of the counter
*/
for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 4; j++) {
        if(i > 1) {
            break;
        }
        console.log('Relevel ')
    }
}
/*
Relevel Relevel Relevel Relevel
Relevel Relevel Relevel Relevel
Relevel Relevel Relevel Relevel
Relevel Relevel Relevel Relevel
Relevel Relevel Relevel Relevel
*/