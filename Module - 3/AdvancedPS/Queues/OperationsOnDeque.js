const Deque = require("./Deque");

const deque = new Deque();
deque.enqueue(2);
deque.enqueue(3);
deque.addFront(1);
deque.traverse();
deque.deleteRear();
deque.enqueue(4);
deque.dequeue();
deque.traverse();

//1 2 3 
//2 4

//1 2 3 4 5
//5 4 3 2 1

//1. enqueue, 2. dequeue