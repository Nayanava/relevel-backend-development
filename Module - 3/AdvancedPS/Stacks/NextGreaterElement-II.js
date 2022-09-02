/**
 * Leetcode - 503
 * 503. Next Greater Element II
 * @param {number[]} nums
 * @return {number[]}
 */

 Array.prototype.top = function () {
    if(this.length) {
        return this[this.length - 1];
    }
    return undefined;
}
var nextGreaterElements = function(nums) {
    const len = nums.length;
    const res = new Array(len).fill(-1);
    const stack = new Array();
    for(let i = 0; i < 2 * len; i++) {
        const valid_index = i % len;
        while(stack.length && nums[stack.top()] < nums[valid_index]) {
            res[stack.pop()] = nums[valid_index];
        }
        stack.push(valid_index);
    }
    return res;
};