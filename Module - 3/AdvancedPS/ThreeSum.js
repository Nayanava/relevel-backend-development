/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(arr) {
    /*
        first lets solve considering that there are no duplicates in the array
    */
    arr.sort((a,b) => a-b);
    const length = arr.length;
    const result = new Array();
    const target = 0;
    // {-4, -1, 0, 1, 2}, length = 5, 
    // [ 0, 1,  2, 3, 4], only up to 2, length - 3
    for(let i = 0; i < length - 2; i++) {
        if(i > 0 && arr[i] === arr[i-1]) {
            continue;
        }
        let j = i + 1, k = length - 1;
        const remainingTarget = target - arr[i];
        while( j < k) {
            if(arr[j] + arr[k] === remainingTarget) {
                result.push([ arr[i], arr[j], arr[k] ]);
                j++;
                k--;
                while(j < k && arr[j] === arr[j-1]) {
                    j++;
                }
                while(k > j && arr[k] === arr[k+1]) {
                    k--;    
                }
            } else if(arr[j] + arr[k] > remainingTarget){
                k--;
            } else {
                j++;
            }
        }
    }
    return result;
};