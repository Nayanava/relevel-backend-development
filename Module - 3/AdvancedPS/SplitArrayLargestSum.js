/*
Leetcode: 410
Given an array nums which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays.
Write an algorithm to minimize the largest sum among these m subarrays.
*/
/**
 * @param {number[]} nums
 * @param {number} 
 * @return {number}
 */
 var splitArray = function(nums, m) {
    let lo = max(nums), hi = total(nums);
    while(lo < hi) {
        const maximumSum = (lo + hi) >>> 1;
        if(numberOfSubArraysWithMaximumSum(nums, maximumSum) > m) {
            lo = maximumSum+1;
        } else {
            hi = maximumSum;
        }
    }
    return lo;
};

function max(arr) {
    let max = arr[0];
    for(let num of arr) {
        max = max > num ? max : num;
    }
    return max;
}
function total(arr) {
    return arr.reduce((sum, curr) => sum += curr, 0);
    
}


function numberOfSubArraysWithMaximumSum(arr, maximumSum) {
    let sum = 0, countOfSubArrays = 1;
    for(let num of arr) {
        if(sum + num > maximumSum)  {
            countOfSubArrays++;
            sum = num;
        } else {
            sum += num;
        }
    }
    return countOfSubArrays;
}