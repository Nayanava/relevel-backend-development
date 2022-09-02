/*
You are given an array which consists of integers
You have to find the next greater element for every element in the given array
    input - [2, 7, 3, 5, 4, 6, 8]
    output- [7, 8, 5, 6, 6, 8, -1]

    [7, 6, 5, 4, 3, 2, 1, 8] - if we use two pointers will be O(n^2)
    
    Naive Approach

    res = new Array(arr.length).fill(-1);
    for(let i = 0; i < arr.length-1; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] > arr[i]) {
                res[i] = arr[j];
                break;
            }
        }
    }
    return res;
*/

Array.prototype.top = function() {
    if(this.length) {
        return this[this.length-1];
    }
}
function nextGreaterElement(arr) {
    const len = arr.length;
    const res = new Array(len).fill(-1);

    const stack = new Array();
    for(let i = 0; i < len; i++) {
        while(stack.length && arr[stack.top()] < arr[i]) {
            res[stack.pop()] = arr[i];
        }
        stack.push(i);
    }
    return res;
}

console.log(nextGreaterElement([2, 7, 3, 5, 4, 6, 8]));
console.log(nextGreaterElement([8, 7, 6, 5, 4, 3, 8]));
console.log(nextGreaterElement([7, 6, 5, 4, 3, 2]));
