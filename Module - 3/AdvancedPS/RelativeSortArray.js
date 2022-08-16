/**
 * LeetCode 1122. Relative Sort Array
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function(arr1, arr2) {
    const freqArr = new Array(1001).fill(0);
    for(let number of arr1) {
        freqArr[number]++;
    }
    let index = 0;
    for(let number of arr2) {
        for(let it = 1; it <= freqArr[number]; it++) {
            arr1[index++] = number;
        }
        freqArr[number] = 0;
    }
    for(let i = 0; i < 1001; i++) {
        if(freqArr[i] === 0) {
            continue;
        }
        for(let it = 1; it <= freqArr[i]; it++) {
            arr1[index++] = i;
        }
    }
    return arr1;
};