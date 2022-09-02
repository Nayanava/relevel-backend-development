/**
 * Leetcode - 907
 * 907. Sum of Subarray Minimums
 * @param {number[]} arr
 * @return {number}
 */
 var sumSubarrayMins = function(arr) {
    
};

//[3, 1, 2, 4] -> [3], [1], [2], [4], [3, 1], [1, 2], [2, 4], [3, 1, 2], [1, 2, 4], [3, 1, 2, 4]
//                 3,   1,   2,   4,    1,      1,       2,       1,         1,           1
//total = 17
/*
     [3, 1, 2, 4] - [2, 4] - [2], [2, 4] - 2 * count on right hand side * count on left hand side


    [3, 4, 2, 5] - [3, 4, 2], [4, 2], [2], [2, 5], , [4, 2, 5], [3, 4, 2, 5] - 12
    
     on right hand side count = (4 - 2) = 2,
     on left hand side count = (2 - (-1)) = 3
     overall sum with contribution of 2 = 3 * 2 * 2 = 8
     
     [3] - 1,
     [2-0] - 2
     
     3 * 2 = 6
     [3], [3, 4] = 3 + 3 = 6
     
     for 4
     count on left = 1
     count on right = 1 - [4]
     [4] = 1 * 4 * 1
     
     // two requirements - 
        1. finding the previous smaller element - index
        2. finding the next smaller element - index
*/
