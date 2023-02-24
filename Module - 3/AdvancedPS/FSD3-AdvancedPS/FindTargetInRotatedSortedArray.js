function findPivot(arr) {
    const n = arr.length;
    let lo = 0, hi = n-1;
    while(lo <= hi) {
        const mid = parseInt((lo + hi)/2);
        if((mid === 0 || arr[mid] < arr[mid-1]) 
            && (mid === hi || arr[mid] < arr[mid+1])) {
                return mid;
            }
        if(arr[mid] > arr[n-1]) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return -1;
}
/*
    [4, 5, 6, 0, 1, 2]
    pivot = 3,
    [4, 5, 6] [0, 1, 2]
*/
function findTarget(arr, target) {
    if(arr[0] > arr[arr.length - 1]) {
        const pivot = findPivot(arr);
        if(target < arr[0]) {
            return findTargetUtil(arr, pivot, arr.length-1, target);
        } 
        return findTargetUtil(arr, 0, pivot-1, target);
    }
    return findTargetUtil(arr, 0, arr.length-1, target);
}

function findTargetUtil(arr, lo, hi, target) {
    while(lo <= hi) {
        let mid = parseInt((lo + hi)/2);
        if(arr[mid] === target) {
            return mid;
        }
        if(arr[mid] < target) {
            lo = mid+1;
        } else {
            hi = mid - 1;
        }
    }
    return -1;
}

console.log(findTarget([4, 5, 6, 0, 1, 2], 1));
console.log(findTarget([4, 5, 6, 0, 1, 2], 6));
console.log(findTarget([5, 0, 1, 2, 3], 3));
console.log(findTarget([1], 0));