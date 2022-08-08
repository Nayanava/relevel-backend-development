/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].
 */
 var lengthOfLIS = function(nums) {
    //longest increasing subsequence
    //NOT - subarray.
    //[0, 3, 1, 6, 2, 2, 7]
    // - [0, 3, 6, 7]
    // - [0, 1, 6, 7]
    // - [0, 1, 2, 7]
    // - [3, 6, 7]
    // - [1, 6, 7]
    // - [1, 2, 7]
    // - length is 4
    // - [5, 4, 5, 2, 3, 1]
    let longestSubsequence = 1;
    let result = new Array(nums.length).fill(0);
    for(let i = 0; i < nums.length; i++) {
        longestSubsequence = max(longestSubsequence, dfs(nums, i, result));
    }
    return longestSubsequence;
};

function dfs(arr, index, result) {
    if(result[index] > 0) {
        return result[index];
    }
    let longestSubsequence = 0;
    for(let i = index + 1; i < arr.length; i++) {
        if(arr[i] <= arr[index]) {
            continue;
        }
        longestSubsequence = max(longestSubsequence, dfs(arr, i, result));
    }
    result[index] = longestSubsequence+1;
    return result[index];
}

function max(a, b) {
    return a > b ? a : b;
}