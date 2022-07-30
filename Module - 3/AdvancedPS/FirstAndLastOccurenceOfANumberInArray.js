//[1, 2, 3, 3, 3, 3, 3, 3, 4, 5, 6, 7]
//first occurence and the last occurence
//first occurence is at index 2
// first occurence - leftmost from the right (hi = mid, keep moving backwards)
//last occurence is at index 7
// last occurence - rightmost from the left (lo = mid and keep moving forward)

function firstOccurence(arr, target) {
    let lo = -1, hi = arr.length;
    while(lo < hi) {
        const mid = parseInt((lo + hi - 1) / 2);
        if(arr[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
}

function lastOccurrence(arr, target) {
    let lo = 0, hi = arr.length-1;
    while(lo < hi) {
        const mid = parseInt((lo + hi + 1)/2);
        if(arr[mid] <= target) {
            lo = mid;
        } else {
            hi = mid - 1;
        }
    }
    return lo;
}
const arr = [1, 2, 3, 3, 3, 3, 3, 3, 4, 5, 6, 7];
console.log(firstOccurence(arr, 2), lastOccurrence(arr, 2));