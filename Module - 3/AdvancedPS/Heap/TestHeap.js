const MaxHeap = require("./MaxHeap");
const PriorityQueue = require("./PriorityQueue");
const heap = new MaxHeap();
const priorityQueue = new PriorityQueue();
const arr = [7, 5, 4, 8, 12, 10, 9];

for(const number of arr) {
    heap.insert(number);
    priorityQueue.insert(number);
    console.log("MaxHeap -----");
    heap.printHeap();
    console.log("PriorityQueue -----");
    priorityQueue.printHeap();
}

/*
    4, 5
      5
     /
    4
    5, 4
      7
     / \
    4   5
    7, 4, 5

      8
     / \
    7   5
   /
  4
  8 7 5 4
      9
     / \
    8   5
   / \
  4   7
  9 8 5 4 7

       10
     /   \
    8     9
   / \   /
  4   7 5
  
  10 8 9 4 7 5
       12
     /    \
    8      10
   / \    /  \
  4   7  5    9

  12 8 10 4 7 5 9
  

  4
  5 4
  7 4 5
  8 7 5 4
  9 8 5 4 7
  10 8 9 4 7 5
  12 8 10 4 7 5 9
*/
console.log("Max Heap - extract all");
while(!heap.isEmpty()) {
    process.stdout.write(heap.extractMax() + " ");
}
console.log("Priority Queue - extract all");
while(!priorityQueue.isEmpty()) {
    process.stdout.write(priorityQueue.extract() + " ");
}