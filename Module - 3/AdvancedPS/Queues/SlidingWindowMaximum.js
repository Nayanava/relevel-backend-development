//[1, 3, -1, -3, 5, 3, 6, 7] length = 8, k = 3
// 3, 3, 5, 5, 6, 7 => 6  n - k + 1
const Deque = require("./Deque");
function slidingWindowMaximum(arr, k) {
    const res = new Array(arr.length - k + 1);
    const deque = new Deque();
    let index = 0;
    for(let i = 0; i < k; i++) {
        while(!deque.isEmpty() && arr[deque.getRear()] < arr[i]) {
            deque.deleteRear();
        }
        deque.enqueue(i);
    }
    res[index++] = arr[deque.getFront()];
    for(let i = k; i < arr.length; i++) {
        while(!deque.isEmpty() && deque.getFront() <= i-k){
            deque.dequeue();
        }
        while(!deque.isEmpty() && arr[deque.getRear()] < arr[i]) {
            deque.deleteRear();
        }
        deque.enqueue(i);
        res[index++] = arr[deque.getFront()];
    }
    return res;
}

console.log(slidingWindowMaximum([1, 3, -1, -3, 5, 3, 6, 7], 3));
