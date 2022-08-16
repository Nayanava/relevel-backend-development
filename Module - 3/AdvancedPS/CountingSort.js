/*
Home Work
https://leetcode.com/problems/h-index/
https://leetcode.com/problems/height-checker

*/
function countingSort(arr) {
    let maxValue = Number.MIN_VALUE, minValue = Number.MAX_VALUE;
    for(let number of arr) {
        minValue = Math.min(minValue, number);
        maxValue = Math.max(maxValue, number);
    }
    const len = maxValue - minValue + 1;
    const freqArr = new Array(len).fill(0);
    
    for(let number of arr) {
        freqArr[number - minValue]++;
    }
    let index = 0;
    //extract the sorted array from the frequency Array
    for(let i = 0; i < len; i++) {
        if(freqArr[i] === 0) {
            continue;
        }
        for(let it = 1; it <= freqArr[i]; it++) {
            arr[index++] = i + minValue;
        }
    }
    return arr;
}

console.log(countingSort([2, 4, 15, 3, 7, 8, 12, 10]));
console.log(countingSort([2, 10, 3, 7, 6, 2, 10, 4, 3]));
console.log(countingSort([10001, 10012, 10004, 10007, 10006, 10003]));
console.log(countingSort([5, 2, -5, -3, 7, 6, 1, 4, 3]));