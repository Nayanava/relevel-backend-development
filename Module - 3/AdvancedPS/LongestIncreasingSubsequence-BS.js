/**
 * 300. Longest Increasing Subsequence
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    let lis = [];
    let hi = -1;
    for(let num of nums) {
        let index = binarySearch(lis, 0, hi, num);
        if(index < 0) {
            index = -(index + 1);
        }
        lis[index] = num;
        if(index > hi) {
            hi = index;
        }
    }
    return hi + 1;
};

function binarySearch(arr, lo, hi, target) {
    while( lo <= hi) {
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
