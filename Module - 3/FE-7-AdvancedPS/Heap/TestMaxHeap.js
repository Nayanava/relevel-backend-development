/*
    1. we try to extract value from empty heap - throw error
    2. we try to insert into full heap - throw error
    3. insert into heap and print heap - the heap should satisfy MaxHeap property
    4. extractMax - print the maxValue and then print the heap, this should also be in MaxHeap format.
    5. again insert a new value - MaxHeap property should be satisfied
    6. If we call extractMax till the heap becomes empty - we should see the result in descending order.
*/

const PriorityQueue = require("./PriorityQueue");
const MaxHeap = require("./MaxHeap");

function testHeap() {
    const heap = new MaxHeap(3);
    try {
        heap.extractMax();
    } catch(e) {
        console.log(e.message);
    }
    try {
        for(let i = 1; i <= 5; i++) {
            let value = parseInt(Math.random() * 500) + 1;
            heap.insert(value);
            heap.printHeap();
            console.log();
        }
    }catch(e) {
        console.log(e.message);
    }
    while(!heap.isEmpty()) {
        console.log(`extracted max value = ${heap.extractMax()}`);
        heap.printHeap();
        console.log();
    }
}

function sortNumbers() {
    const arr = [1, 2, 3, 11, 12];
    arr.sort((a, b) => a - b);
    console.log(arr);
}

function TestPriorityQueue() {
    const minHeapPQ = new PriorityQueue(5, (a, b) =>  a < b);
}
//testHeap();
sortNumbers();
