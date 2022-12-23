/*  
Find the kth smallest element in an array of n elements without actually sorting an array. Expected time complexity: O(nlogk) Expected Space Complexity: O(k)
Example: Input [2,3,45,6,79,1,15], k = 2
Output 2

kth smallest - kth value 3
*/

const PriorityQueue = require("./PriorityQueue")

kthSmallestElement = function(arr, k) {
    const pq = new PriorityQueue(k);
    for(let i = 0; i < k; i++) {
        pq.enqueue(arr[i]);
    }
    for(let i = k; i < arr.length; i++) {
        if(arr[i] < pq.peek()) {
            pq.dequeue();
            pq.enqueue(arr[i]);
        }
    }

    return pq.peek();
}
console.log(kthSmallestElement([2,3,45,6,79,1,15], 5));
