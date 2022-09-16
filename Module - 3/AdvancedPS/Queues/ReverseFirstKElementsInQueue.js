const Queue = require("./Queue");

function reverseKElementsInQueue(queue, n, k) {
    const stack = new Array();
    let count = 0;
    while(++count <= k) {
        stack.push(queue.dequeue());
    }
    while(stack.length) {
        queue.enqueue(stack.pop());
    }
    count = 0;
    while(++count <= n-k) {
        queue.enqueue(queue.dequeue());
    }
}

const queue = new Queue();
for(let i = 1; i <= 10; i++) {
    queue.enqueue(i);
}
reverseKElementsInQueue(queue, 10, 4);
queue.traverse();
