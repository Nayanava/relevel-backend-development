/*
1. getDigits(maxNumber)
2. getDigitAtPosition(number, divisor)
main function - radixSort(arr)
*/

/*Homework
//k = 4 and maxDigit has 3 digits, how long will we run?? we will run up to 3 digits only
// if k is less than digits in maxNumber then we will run up to k digits.
// =>  return the sorted array till that point.

// Question 2: - given a string which contains characters or alphabets, we have to sort the string. only one string not multiple strings.
// input :- unacademy
// output :- aacdemnuy

*/
const radixSort = (arr) => {
    //1. find the maximum number in the array
    let maxNumber = arr[0];
    for(let number of arr) {
        maxNumber = Math.max(number, maxNumber);
    }
    let maxDigits = getdigits(maxNumber);
    let divisor = 1;
    while(--maxDigits >= 0) {
        const buckets = new Array(10);
        for(let i = 0; i < buckets.length; i++) {
            buckets[i] = [];
        }
        for(let number of arr) {
            const index = getDigitAtPosition(number, divisor);
            buckets[index].push(number);
        }
        console.log(buckets);
        divisor *= 10;
        let index = 0;
        for(const bucket of buckets) {
            for(const number of bucket) {
                arr[index++] = number;
            }
        }
    }
    return arr;
}

const getdigits = (maxNumber) => {
    let count = 0;
    while(maxNumber > 0) {
        maxNumber = parseInt(maxNumber / 10);
        count++;
    }
    return count;
}

const getDigitAtPosition = (number, divisor) => {
    return parseInt(number/divisor) % 10;
}

console.log(radixSort([237, 146, 259, 348, 152, 163, 235, 48, 36, 62]));