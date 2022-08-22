/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const auxArray = new Array(nums.length);
    for(let i = 0; i < nums.length; i++) {
        auxArray[i] = [nums[i], i];
    }
    auxArray.sort((a, b) => a[0] - b[0]);
    let left = 0, right = nums.length-1;
    while(left < right) {
        if(auxArray[left][0] + auxArray[right][0] === target) {
            return [auxArray[left][1], auxArray[right][1]];
        } else if(auxArray[left][0] + auxArray[right][0] > target) {
            right--;
        } else {
            left++;
        }
    }
    return [];
};

/*

part 1 is to sort the array.
part 2 is => given a sorted array, how can we find if two variables sum to a target in O(n) time.
    => naive solution or brute force solution
        => check every possible combination of two numbers
            =>  nC2 = n*(n-1)/2,
            for first number (n-1)
            for second number (n-2)
            for third number (n-3)
            ....
            for second last number 1 
            (n-1) + (n-2) + ... 1 = n*(n-1)/2 = O(n^2)
        => [2, 7, 11, 15], target = 9
        => left = 0, right = 3, if( arr[left] + arr[right] )
        => 2 + 15 = 17,
        because 17 > target, we need to reduce the sum. => right --;
        left = 0, right = 2, 
        2 + 11 = 13,
        because 13 > target, we need to reduce the sum. => right --;
        left = 0, right = 1,
        2 + 7 = 9, (this is my answer)
        
    Taking second example:
    
    part 1:
    [3, 2, 4], target = 6, ans:- (1, 2)
    if I sort [2, 3, 4], ans:- (0, 2)
    1. we maintain the information of the old index position
    2. after we find our pair, we can search for the index position of the numbers in the old array,
    auxArray => [[3, 0], [2, 1], [4, 2]];
    sort based on value -> 0th index is value -> sort based on 0th index;
    auxArray => [[2, 1], [3, 0], [4, 2]];
    while(left < right) {
        if(auxArray[left][0] + auxArray[right][0] === target) {
            return [auxArray[left][1], auxArray[right][1]];
        } else if(auxArray[left][0] + auxArray[right][0] > target) {
            right--;
        } else {
            left++;
        }
    }
    return [];
*/