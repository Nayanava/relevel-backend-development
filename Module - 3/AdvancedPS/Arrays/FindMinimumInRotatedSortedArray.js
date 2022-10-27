/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    let lo = 0, n = nums.length, hi = n-1;
    while(lo <= hi) {
        const mid = (lo + hi) >>> 1;
        if((mid === 0 || nums[mid-1] > nums[mid]) && (mid === n-1 || nums[mid+1] > nums[mid])) {
            return nums[mid];
        }
        if( (nums[mid] >= nums[0]) &&  (nums[0] > nums[n-1]) ) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return -1;
};