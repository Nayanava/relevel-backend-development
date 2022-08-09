//we are not using this
function findPosition(arr, target, lo) {
    let hi = arr.length - 1;
    while(lo <= hi) {

        const mid = (lo + hi) >>> 1;
        if(arr[mid] === target) {
            return mid;
        } else if(arr[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return -(lo + 1);
}

function findLargestMinimumDistance(arr, k) {
    arr.sort((a, b) => a - b);
    console.log(arr);
    let lo = arr[arr.length - 1], hi = lo - arr[0];
    for(let i = 1; i < arr.length; i++) {
        lo = min(lo, arr[i] - arr[i-1]);
    }
    while(lo < hi) {
        const mid = (lo + hi + 1) >>> 1;
        if(!canPlaceKCows(arr, mid, k)) {
            hi = mid - 1;
        } else {
            lo = mid;
        }
    }
    return lo;
}

function canPlaceKCows(arr, minDistance, k) {
    let count = 1, previousPosition = arr[0], prevIndex = 0;
    for(let start = 1; start < arr.length; start ++) {
        if(previousPosition +  minDistance > arr[start]) {
            continue;
        }
        previousPosition = arr[start];
        if(++count === k) {
            return true;
        }
    }
    return false;
}

function min(a, b) {
    return a < b ? a : b;
}

console.log(findLargestMinimumDistance([0, 3, 4, 7, 10, 9], 3));
console.log(findLargestMinimumDistance([0, 3, 4, 7, 10, 9], 4));
console.log(findLargestMinimumDistance([1, 2, 3], 2));
console.log(findLargestMinimumDistance([4, 2, 1, 3, 6], 2));
console.log(findLargestMinimumDistance([1,2,4,8,9], 3));