/*
You are Given a series of positive integer numbers in the form of a sorted array as A[i] where i is the index. N is the positive number which you have to check in the given array A[i] whether the given N is duplicate in the Array or not. If it is duplicate output as "TRUE" if it is non duplicate output as "FALSE".
Note: Use Binary search algorithm to find the N.
let arr = [1, 3, 5, 5, 7, 8, 9]; findNumber = 5;
*/

const hasDuplicate = (arr, target) => {
    let lo = 0, hi = arr.length - 1;
    while(lo <= hi) {
        const mid = (lo + hi)/2;
        if(arr[mid] === target) {
            if((mid > 0 && arr[mid-1] === target) || (mid < arr.length - 1 &&arr[mid+1] === target)) {
                return true;
            } 
            return false;
        } else if(arr[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return false;
}

let arr = [1, 3, 5, 5, 7, 8, 9];
console.log(hasDuplicate(arr, 5));
console.log(hasDuplicate(arr, 7));
console.log(hasDuplicate(arr, 10));