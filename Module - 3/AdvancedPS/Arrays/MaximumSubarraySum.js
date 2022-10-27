/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let sumSoFar = 0, maximumSumSoFar = 0, minimumNegative = -Infinity;
    let hasPositive = false;
    for(let number of nums) {
        sumSoFar += number;
        if(sumSoFar < 0) {
            sumSoFar = 0;
            minimumNegative = Math.max(minimumNegative, number);
        } else {
            hasPositive = true;
        }
        maximumSumSoFar = Math.max(maximumSumSoFar, sumSoFar);
    }
    return !hasPositive ? minimumNegative : maximumSumSoFar;
};