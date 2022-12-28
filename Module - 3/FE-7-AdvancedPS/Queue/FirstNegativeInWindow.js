const Queue = require("../../AdvancedPS/Queues/Queue");

function findFirstNegativesInWindow(arr, k) {
     const queue = new Queue();
     const res = new Array(arr.length - k + 1);
     for(let i = 0; i < k; i++) {
         if(arr[i] < 0) {
            queue.enqueue(i);
         }
     }
     let resIndex = 0;
     res[resIndex++] = queue.isEmpty() ? NaN : arr[queue.getFront()];
     for(let i = k; i < arr.length; i++) {
         while(!queue.isEmpty() && queue.getFront() <= i - k) {
             queue.dequeue();
         }
         if(arr[i] < 0) {
             queue.enqueue(i);
         }
         res[resIndex++] = queue.isEmpty() ? NaN : arr[queue.getFront()];
     }
     return res;
}

console.log(findFirstNegativesInWindow([-2, 0, -3, 4], 2));