/*

Explanation-
1, 2, 4 | 5, 6

1.we have one sorted array
1. we split the array into almost two equal halves

if I split a sorted array into two equal halves and in the middle
the last element of the left half is the max element of that half..
the first element of the right half is the min element of that half..

in case of even numbers.
    (the last element of the left half + the first element of the right half)/2 is my median
in case of odd numbers.
    the last element of the left half will be my answer.

we need the maximum element from the left half and the minimum element from the right half

there is one last thing - 
median is always either the middle element of the half of the two middle elements.

if I fetch the max from the left side and I fetch the min from the right side - these two should
be the authentic middle elements.

1, 2, 4, 5 | 6, 7, 8, 9
if the current size is odd.
if the element is less than the minimum element of the right hand side it will go to the left side
and vice versa.
immediately I need to check if the size of one of the heaps - the size of the other of the other 
is greater than 1???
    if the max heap is greater than the minHeap in size by 1- we will move the minElement to the minHeap
    and vice versa..

    when the number of elements is odd? 
    whichever heap is greater in size, we will return the peek of that heap.
*/

class PriorityQueue {
    constructor(comparator = null) {
        this.comparator = comparator !== null ? comparator :  (a, b) => {
            return a > b;
        };
        this.heap = new Array();
    }

    insert = function(value) {
        this.heap.push(value);
        let index = this.heap.length-1;
        while(index > 0) {
            const parentIndex = parseInt((index-1)/2);
            if(!this.comparator(this.heap[parentIndex], this.heap[index])) {
                return;
            } 
            this._swap(parentIndex, index);
            index = parentIndex;
        }
    }

    heapify = function(index) {
        const leftIndex = 2 * index + 1;
        let targetIndex = index;
        if(leftIndex < this.heap.length && this.comparator(this.heap[index], this.heap[leftIndex])) {
            targetIndex = leftIndex;
        }
        const rightIndex = 2 * index + 2;
        if(rightIndex < this.heap.length && this.comparator(this.heap[targetIndex], this.heap[rightIndex])) {
            targetIndex = rightIndex;
        }
        if(targetIndex !== index) {
            this._swap(targetIndex, index);
            this.heapify(targetIndex);
        }
    }

    extract = function () {
        if(this.isEmpty()) {
            return null;
        }
        const root = this.heap[0];
        this._swap(0, this.heap.length-1);
        this.heap.pop();
        this.heapify(0);

        return root;
    }
    isEmpty = function() {
        return !(this.heap && this.heap.length);
    }
    printHeap() {
        for(let i = 0; i < this.heap.length; i++) {
            process.stdout.write(this.heap[i] + " ");
        }
        console.log();
    }
    peek = function () {
        return this.heap[0];
    }
    
    size = function () {
        return this.heap.length;
    }
    _swap = function(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}


var MedianFinder = function() {
    this.leftDataSet = new PriorityQueue((a, b) => {
            return b > a;
        });
        this.rightDataSet = new PriorityQueue((a, b) => {
            return a > b;
        });
        this.size = 0;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.size++;
    if(this.leftDataSet.isEmpty() && this.rightDataSet.isEmpty()) {
        this.leftDataSet.insert(num);
        return;
    } 
    if(num > this.leftDataSet.peek()) {
        this.rightDataSet.insert(num);
        if(this.rightDataSet.size() - this.leftDataSet.size() > 1) {
            this.leftDataSet.insert(this.rightDataSet.extract());
        }
    } else {
        this.leftDataSet.insert(num);
        if(this.leftDataSet.size() - this.rightDataSet.size() > 1) {
            this.rightDataSet.insert(this.leftDataSet.extract());
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.size % 2 === 0) {
        return (this.leftDataSet.peek() + this.rightDataSet.peek()) / 2;
    }
    return this.leftDataSet.size() > this.rightDataSet.size() ? this.leftDataSet.peek() : this.rightDataSet.peek();
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */