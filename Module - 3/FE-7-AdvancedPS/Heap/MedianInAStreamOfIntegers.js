/*
The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

For example, for arr = [2,3,4], the median is 3.
For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
Implement the MedianFinder class:

MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far. Answers within 10 ^-5 of the actual answer will be accepted.
 

Example 1:

Input
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output
[null, null, null, 1.5, null, 2.0]

Explanation
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
*/

const PriorityQueue = require("./PriorityQueue")

class MedianFinder {
    constructor() {
        //maximum of the left
        this.leftHeap = new PriorityQueue(Infinity, (a, b) => a > b);
        //minimum of the right
        this.rightHeap = new PriorityQueue(Infinity, (a, b) => a < b);
        this.totalElements = 0;
    }

    addNum = function(num) {
        this.totalElements++;
        if(this.leftHeap.isEmpty() || num < this.leftHeap.peek()) {
            this.leftHeap.enqueue(num);
            this._shuffle(this.leftHeap, this.rightHeap);
        } else {
            this.rightHeap.enqueue(num);
            this._shuffle(this.rightHeap, this.leftHeap);
        }
    }
    _shuffle = function(fromHeap, toHeap) {
        if(fromHeap.size() - toHeap.size() > 1) {
            toHeap.enqueue(fromHeap.dequeue());
        }
    }

    findMedian = function() {
        if(this.totalElements % 2) {
            return this.leftHeap.size() > this.rightHeap.size() ? this.leftHeap.peek() : this.rightHeap.peek();
        }
        return (this.leftHeap.peek() + this.rightHeap.peek()) / 2
    }
}

const mf = new MedianFinder();
const arr = [1, 4, 8, 9, 16, 32, 37, 40, 48, 52];

for(let number of arr) {
    mf.addNum(number);
    console.log(mf.findMedian());
}