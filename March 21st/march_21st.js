// //While loop
// //condition
// // let counter = 1;
// // while(counter <= 10) {
// //     console.log(counter);
// //     counter++; 
// // }

// //WE ARE TRYING TO GENERATE A RANDOM VALUE BETWEEN 1 TO 6

// let diceRoll;
// console.log(`Dice rolled to ${diceRoll}`);

//  do {
//     console.log(`Dice rolled to ${diceRoll}`);
//     //WE ARE TRYING TO GENERATE A RANDOM VALUE BETWEEN 1 TO 6
//     diceRoll = Math.trunc(Math.random() * 6) + 1;
// } while(diceRoll !== 6);

// console.log(`Dice rolled to ${diceRoll}`);

// // let diceRoll = 6;
// // do {
// //     console.log(`Value of dice roll is ${diceRoll}`)
// // }while(diceRoll !== 6);

// //---------------------------BREAK STATEMENT---------------------

// let counter = 1;
// while(true) {
//     if(counter === 5) {
//         break;
//     }
//     //let val = counter++;
//     console.log(`${counter++}`); //first assign then increment
// }

let numerator = 10;
while(numerator > 0) {
    //we are trying to choose a value between 0 - 5
    let denominator = Math.trunc(Math.random() * 6);
    console.log(`denominator: ${denominator}`)
    if(denominator === 0) {
        break;
    }
    console.log(`${numerator--/denominator}`)
}
//------------CONTINUE--------------------

numerator = 10;
while(numerator > 0) {
    //we are trying to choose a value between 0 - 5
    let denominator = Math.trunc(Math.random() * 6);
    console.log(`denominator: ${denominator}`)
    numerator--;
    if(denominator === 0) {
        continue;
    }
    console.log(`${numerator/denominator}`)
}

