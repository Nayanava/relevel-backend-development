/*
write a custom iterator using the example given in this document.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
*/

const { resolve } = require("path/posix");
const { threadId } = require("worker_threads");

/*
Q: Given an array of numbers, find all the disctinct elements and their last seen positions in the array.
Input: [1, 2, 3, 4, 5, 1, 6, 2, 3]
output: [[1 - 5], [2 - 7], [3 - 8], [4 - 3], [5 - 4], [6 - 6]
*/

// const { count } = require("console");


// const findPositionOfUniqueElements = (arr) => {
//     const map = new Map();
//     for(let i = 0; i < arr.length; i++) {
//         map.set(arr[i], i);
//     }
//     for(let [key, value] of map) {
//         console.log(key, ":", value);
//     }
// }

// findPositionOfUniqueElements([1, 2, 3, 4, 5, 1, 6, 2, 3]);

// const obj = {
//     'name': 'Nayanava',
//     'age': 32,
//     'occupation': 'Software Engineer'
// }
// for (let prop in obj) {
//     console.log(prop, ":", obj[prop]);
// }

// for(let prop of Object.keys(obj)) {
//     console.log(prop, ":", obj[prop]);
// }

// for(let [key, value] of Object.entries(obj)) {
//     console.log(key, ":", value);
// }


// We are given two arrays - 
//arrays of male and arrays of female - [male, female]

const listF = ['FA', 'FB', 'FC', 'FE', 'FD'];
const listM = ['MA', 'MB', 'MC', 'ME', 'MD'];

function randomIndex(max, map) {
    while(true) {
        let randIndex = parseInt(Math.random() * max);
        if(map.has(randIndex)) {
            continue;
        } else {
            map.set(randIndex, true);
            return randIndex;
        }
    }
}

const mapM = new Map();
const mapF = new Map();

const makePair = (listF, listM) => {
    let randIndexM, randIndexF
    randIndexM = randomIndex(listM.length, mapM);
    randIndexF = randomIndex(listF.length, mapF);

    return listF[randIndexF] + " " + listM[randIndexM];
}

const participantPair = {
    [Symbol.iterator]: () => {
        let count = 0;
        return {
            next: () => {
                if(count++ < 5) {
                    return {
                        value: makePair(listF, listM),
                        done: false
                    }
                } 
                return {done: true}
            }
        }
    }
}

for(const pair of participantPair) {
    console.log(pair);
}

//---------------------------Generators-----------------------
// function* makeRangeIterator(start = 0, end = 100, step = 1) {
//     let iterationCount = 0;
//     for (let i = start; i < end; i += step) {
//         iterationCount++;
//         yield i;
//     }
//     return iterationCount;
// }

// const makeRangeGenerator = makeRangeIterator(1, 50, 3);
// let object = makeRangeGenerator.next();
// // while(!object.done) {
// //     console.log(object.value);
// //     object = makeRangeGenerator.next();
// // }
// // console.log('Number of iterations ', object.value);



function* generator (){
    let value = yield 1;
    yield value + 2;
    yield 3;
}

const gen = generator();
const gen1 = gen;
console.log('yield', gen.next());
console.log('yield', gen.next(10));
console.log('yield', gen.return(4));
// console.log('yield', gen1.next());
// console.log('yield', gen1.next());

const first = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('first()')
        }, 1000);
    })
}

const second = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('second()')
        }, 1000);
    })
}

const third = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('third()')
        }, 1000);
    })
}

async function* asyncgenerator() {
    yield await first();
    yield await second();
    yield await third();
}

const asynGen = asyncgenerator();
(async () => {
    let data = await asynGen.next();
    while(!data.done) {
        console.log(data.value);
        data = await asynGen.next();
    }
    console.log(data);
})();

