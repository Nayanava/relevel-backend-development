/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraysWithKDistinct = function(nums, k) {
    // subarrays with atmost(2) distinct - it will include 1 and 2
    //subarrays with atmost(1) distinct - it will include 1
    // atmost(2) - atmost(1) = exactly (2) ???
    
    // atmost(3) = it will include - 1, 2 and 3
    // atmost(2) = it will include - 1 and 2
    //atmost(3) - atmost(2) = exactly(3) ??
    return subarraysWithAtmostKDistinct(nums, k) - subarraysWithAtmostKDistinct(nums, k-1);
};

const subarraysWithAtmostKDistinct = function (nums, k) {
    const count = {};
    let length = 0;
    for(let i = 0, start = 0; i < nums.length; i++) {
        if(!count[nums[i]]) {
            count[nums[i]] = 0;
        }
        count[nums[i]] += 1;
        if(count[nums[i]] === 1) {
            k--;
        }
        while(k < 0) {
            count[nums[start]] --;
            start++;
            if(count[nums[start]] === 0) {
                k++;
            }
        }
        length += (i - start + 1);
    }
    return length;
}
    
    //how to find atmost k 
    /*
     k = 1, 0, -1
     1, 2, 1,[2, 3]
     1, 2, 1, 2
     [1], [1, 2], [2]
     [1, 2, 1], [2, 1], [1]
     [1, 2, 1, 2], [2, 1, 2], [1, 2], [2]
     [2, 3], [3]
     
     [1]
     [2]
     [1]
     [2]
     [3]
     count = 1 + 1 + 1 + 1 + 1 = 5
        k = -1
        while( k < 0) {
            count[nums[start]] -= 1;
            if(count[nums[start]] === 0) {
                k ++;
            }
        }
        if (k >= 0) {
            count += 3 + (2-0+1) = 6 + (3 - 0 + 1) = 4 = 10 + (4 - 3) + 1 = 12
    }
     }
     12 - 5 = 7
    */