function findMissingNumber(arr) {
    let lo = 0, hi = arr.length-1;
    while(lo < hi) {
        const mid = (lo + hi) >>> 1;
        if(arr[mid] === mid + 1) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo + 1;
}

console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8]));
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 8, 9]));
console.log(findMissingNumber([2, 3, 4, 5, 6, 7, 8, 9]));