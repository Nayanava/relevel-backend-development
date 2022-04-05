const array = [1, 2, 3, 4, 5];
// Sorting - arranging the data in a sequence
// sort an array of numbers
/*
    const arr = [1, 5, 4, 3, 2]
    sort this particular array - arr in ascending order
    arr - [1, 2, 3, 4, 5]

    Arrays - have multiple functions or methods inbuilt
    1. arr.push(), arr.pop()
    2. arr.sort() - when we invoke this method on the array object
    it will sort the array in ascending order.

*/

const arr = [undefined, NaN, Infinity, 3, 2, 5];
//console.log(arr[0]);
arr.sort();
console.log(arr);

//string - the order of sorting will be in the 
// lexicographical - dictionary
const arrString = ['one', 'two', 'three', 'four'];
arrString.sort();
console.log(arrString);


//-----------------HashTable/Map------------------
/*
    key : value pairs,
    key -> hash(key);
    every different key in the ideal case,
    it will generate a new hashcode.
*/

const map = new Map();

map['a'] = 'nayanava';
map['b'] = 'samik';
map['a'] = 'abhigyan';
map[1] = 'hello';
console.log(map['a'] + " " + map['b'] + " " + map[1] + " " + map[2]);


let index = -1;
for(let i = 0; i < array.length; i++) {
    if(array[i] == 5) {
        index = i;
    }
}
/*
Array -> key - index and value - value stored in the index;
Object -> key is the name of the property and the value is the value stored in it.

map -> the search becomes very fast,
also the addition is very fast;

it will improve the overall efficiency.
*/

const arrOf0sand1s = [0, 0, 0, 1, 1, 1];
/*
    [0, 0, 1, 1, 0, 1]
    [0, 0, 0, 1, 1, 1]
*/

let zeroPointer = arrOf0sand1s.length - 1;
let onePointer = 0;

while(onePointer < zeroPointer) {
    while(onePointer < zeroPointer && arrOf0sand1s[onePointer] != 1) {
        onePointer++;
    }

    while(zeroPointer > onePointer && arrOf0sand1s[zeroPointer] != 0) {
        zeroPointer--;
    }
    let temp = arrOf0sand1s[onePointer];
    arrOf0sand1s[onePointer] = arrOf0sand1s[zeroPointer];
    arrOf0sand1s[zeroPointer] = temp;
    /*
            arrOf0sand1s[onePointer] = 0;
            arrOf0sand1s[zeroPointer] = 1;
         */
}

console.log(arrOf0sand1s);

/*
    [0, 1, 0, 1, 0, 2, 2, 2];
    two counters - one for 0, one for 1,
    remaining will be 2's - length - count of (one + two)
*/

let countOf1 = 0, countOf0 = 0;
const arr012 = [1, 2, 1, 0, 1, 0, 0 , 1, 2];

//countOf0 = 3, countOf1 = 4;
/*
(i = 0; i < 3; i++)
0, 0, 0, 1, 1, 1, 1
0, 1, 2, 3, 4, 5, 6
(i = 3; i < 7; i++)
*/
for(let i = 0; i < arr012.length; i++) {
    if(arr012[i] === 1) {
        countOf1++;
    } else if(arr012[i] === 0) {
        countOf0++;
    }
}
let i = 0;
// for(i = 0; i < countOf0; i++) {
//     arr012[i] = 0;
// }
// for(i = countOf0; i < countOf0 + countOf1; i++) {
//     arr012[i] = 1;
// }
// for(i = countOf0 + countOf1; i < arr012.length; i++) {
//     arr012[i] = 2;
// }
// console.log(arr012);

for(i = 0; i < countOf0; i++) {
    arr012[i] = 0;
}
while(i < countOf0 + countOf1) {
    arr012[i++] = 1;
}
while(i < arr012.length) {
    arr012[i++] = 2;
}
console.log(arr012);



const numberArr = [1, 2, 3, 4, 5, 6]
//[720, 360, 240, 180, 144, 120]
// [1, 1, 2, 3, 6, 24, 120]
/*
left[0] = 1,
left[1] = left[0] * numberArr[0]; (1 * 1);
left[2] = left[1] * numberArr[1];

*/
const left = [];
const right = [];
let prod = 1;
left[0] = 1;
right[numberArr.length-1] = 1;
for(let i = 1; i < numberArr.length; i++) {
    left[i] = prod;
    prod *= numberArr[i];
}
prod = 1;
for(let i = numberArr.length - 1; i >= 0; i--) {
    right[i] = prod;
    prod *= numberArr[i];
}

for(let i = 0; i < numberArr.length; i++) {
    numberArr[i] = left[i] * right[i];
}

console.log(numberArr);
/*
We can solve this without using the right array.
*/

//--------Trapping Rain Water -----------

function maxi(a, b) {
    return a > b ? a : b;
}
const height = [6, 3, 5, 2, 1, 8, 4, 2, 5];
const lHeight = [], rHeight = [];

lHeight[0] = 0;
let max = height[0];
const len = height.length;
for(let i = 1; i < len; i++) {
    lHeight[i] = max;
    max = maxi(max, height[i]);
}
console.log(lHeight);
rHeight[len-1] = 0;
max = height[len-1];
for( let i = len-2; i >= 0; i--) {
    rHeight[i] = max;
    max = maxi(height[i], max);
}
console.log(rHeight);
let totalWater = 0;
for(let i = 0; i < len; i++) {
    if(height[i] < Math.min(lHeight[i], rHeight[i])) {
        totalWater += Math.min(lHeight[i], rHeight[i]) - height[i];
    }
}

console.log(totalWater);