//Temporal Dead Zone

//console.log(constantVariable);
// func();
// var varVariable = 11;
// let letVariable = 10;
// //let letVariable = 20;

// const constantVariable;

// var varVariable = 13;
// console.log(square(10));

// var func = function() {
//     console.log("Testing type error");
// }
//TypeError: 
/*
*/
//SyntaxError

//ReferenceError: 

//------------ Block----------------
{
    repeater();
    //var a = 5;
    let b = 10;
    const c = 20;
    
    function repeater() {
        // for(let i = 1; i <= 10; i++) {
        //     console.log(i);
        // }
    }
}
//console.log(square(10));
//console.log(a);
repeater();

//------- Scope Chain -------------

// var a = 10;
// function b() {
//     c();
//     function c() {
//         console.log(a);
//     }
// }

// b();

//-------- Closures -------------

function countIncrementer() {
    var counter = 10;
    return function() {
        ++counter;
        console.log(`value of counter : ${counter}`)
    }
}

const incrementCounter = countIncrementer();
console.log(incrementCounter);
incrementCounter();
incrementCounter();
incrementCounter();

