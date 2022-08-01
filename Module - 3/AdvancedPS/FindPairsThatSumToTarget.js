/*
Given an array of positive integers, and a value sum, determine if there is a sub-array of the given set with sum equal to given sum. Find the two numbers that summation will be equal to the value in the sum variable.
Input: arr = [1, 3, 4, 5, 7, 10, 11, 12, 15, 17, 20] , sum = 4
Output: 5 4
*/

const findConsecutiveNumbers = (arr, target) => {
    let lo = 0, hi = arr.length - 1;
    while( lo <= hi) {
        const mid = parseInt((lo + hi) / 2);
        if(mid > 0 && arr[mid] + arr[mid-1] === target) {
            return [arr[mid-1], arr[mid]];
        }
        if(mid < arr.length-1 && arr[mid] + arr[mid+1] === target) {
            return [arr[mid], arr[mid+1]];
        }
        if((mid > 0 && arr[mid] + arr[mid-1] > target) || (mid < arr.length-1 && arr[mid] + arr[mid+1] > target)) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return [];
}

const arr = [1, 3, 4, 5, 7, 10, 11, 12, 15, 17, 20]
console.log(findConsecutiveNumbers(arr, 4));
console.log(findConsecutiveNumbers(arr, 9));
console.log(findConsecutiveNumbers(arr, 20));
console.log(findConsecutiveNumbers(arr, 32));