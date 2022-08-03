/*
Leetcode 209. Minimum Size Subarray Sum
*/
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    let total = 0;
    for(let num of nums) {
        total += num;
    }
    if(total < target) {
        return 0;
    }
    let lo = 1, hi = nums.length;
    while(lo < hi) {
        const subArrayLength = (lo + hi) >>> 1; //parseInt((low + hi)/2)
        if(isAnySubarraySumGreaterThanEqualToTarget(nums, subArrayLength, target)) {
            hi = subArrayLength;
        } else {
            lo = subArrayLength + 1;
        }
    }
    return lo;
};

function isAnySubarraySumGreaterThanEqualToTarget(arr, subArrayLength, target) {
    let sum = 0, i = 0;
    for(; i < subArrayLength; i++) {
        sum += arr[i];
    }
    if(sum >= target) {
        return true;
    }
    for(i = subArrayLength; i < arr.length; i++) {
        sum += arr[i] - arr[i-subArrayLength];
        if(sum >= target) {
            return true;
        }
    }
    return false;
}