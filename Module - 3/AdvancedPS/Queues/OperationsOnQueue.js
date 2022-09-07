const Deque = require("./Deque");
const Queue = require("./Queue");

const queue = new Queue(5);
//const queue = new Queue(5);
//------------------enqueue----------------
try {
    queue.enqueue("Abhigyan");
    console.log(queue.getFront());
    queue.enqueue("Pranit");
    queue.enqueue("Samik");
    queue.enqueue("Rehan");
    queue.enqueue("Vinayak");
    //throw isFull error
    queue.enqueue("Nayanava");
} catch (error) {
    console.log(error.message);
}

//------------------dequeue----------------
try {
    let dequeued = queue.dequeue();
    console.log("Dequeued person", dequeued.val);
    console.log("Person in the front", queue.getFront());
    dequeued = queue.dequeue();
    console.log("Dequeued person", dequeued.val);
    console.log("Person in the front", queue.getFront());
    dequeued = queue.dequeue();
    console.log("Dequeued person", dequeued.val);
    console.log("Person in the front", queue.getFront());
    dequeued = queue.deleteRear();
    console.log("Dequeued person", dequeued.val);
    console.log("Person in the front", queue.getFront());
    dequeued = queue.dequeue();
    console.log("Dequeued person", dequeued.val);
    console.log("Person in the front", queue.getFront());
    console.log(queue.isEmpty())
    dequeued = queue.dequeue();
} catch(error) {
    console.log(error.message);
}

