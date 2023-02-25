function findMaximumSubarraySum(arr) {
    /*
        1. we will handle for all negative numbers
        2. we will return the maximum sum
        3. we will find the starting and the ending position
    */
   let areAllNegative = true;
   let maxNegativeIndex = -1;
   let sumSoFar = 0, maxSum = 0, possibleStart = 0, end = -1, start = 0;

   for(let i = 0; i < arr.length; i++) {
    sumSoFar += arr[i];   
    if(arr[i] < 0 && 
        (maxNegativeIndex == -1 || arr[i] > arr[maxNegativeIndex])) {
            maxNegativeIndex = i;
       }
       if(sumSoFar < 0) {
           sumSoFar = 0;
           possibleStart = i+1;
       } else {
           areAllNegative = false;
           if(maxSum < sumSoFar) {
               maxSum = sumSoFar;
               end = i;
               start = possibleStart;
           }
       }
   }
   return areAllNegative? [arr[maxNegativeIndex], maxNegativeIndex, maxNegativeIndex] :
            [maxSum, start, end];
}

console.log(findMaximumSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(findMaximumSubarraySum([-1, -2, -3, -4]));