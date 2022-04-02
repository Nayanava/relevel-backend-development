console.log(`13 * 1 = ${13 * 1}`)
console.log(`13 * 2 = ${13 * 2}`)
console.log(`13 * 3 = ${13 * 3}`)
console.log(`13 * 4 = ${13 * 4}`)
console.log(`13 * 5 = ${13 * 5}`)
console.log(`13 * 6 = ${13 * 6}`)
console.log(`13 * 7 = ${13 * 7}`)
console.log(`13 * 8 = ${13 * 8}`)
console.log(`13 * 9 = ${13 * 9}`)
console.log(`13 * 10 = ${13 * 10}`)

for(let rep = 1; rep <= 10; rep = rep + 1) {
    console.log(`13 * ${rep} = ${13*rep}`);
}

let rep = 1;
while(rep <= 10 ) {
    console.log(`13 * ${rep} = ${13*rep}`);
    rep += 1;
}

//-----while dice roll is not 6-------

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(`You rolled a ${dice}`)
while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
}