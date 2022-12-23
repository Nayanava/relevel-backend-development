/*
    Max Heap -> a binary tree data structure(represented in the form of an array)
    where every parent node(non-leaf node || internal node) is greater than both its children
*/

class PriorityQueue {
    constructor(maxCapacity = Infinity, compare = (a, b) => {
        return a > b;
    }) {
        this.heap = new Array();
        this.maxCapacity = maxCapacity;
        this.compare = compare;
    }

    isFull = function() {
        return this.heap.length === this.maxCapacity;
    }

    /*
        a > b
    */
    enqueue = function(data) {
        if(this.isFull()) {
            throw new Error('already reached maximum limit');
        }
        this.heap.push(data);
        let child = this.heap.length-1;

        /*
            In case of max Heap
            1. a > b in compare function
            2. parent > child
        */
        while(child > 0) {
            const parent = parseInt((child-1)/2);
            if(this.compare(this.heap[parent], this.heap[child])) {
                return;
            }
            this._swap(child, parent);
            child = parent;
        }
    }

    _swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    dequeue = function() {
        if(this.isEmpty()) {
            throw new Error('Heap is already empty');
        }
        const max = this.heap[0];
        this._swap(0, this.heap.length-1);
        this.heap.pop();
        this.heapify(0);
        return max;
    }

    peek = function() {
        return this.heap[0];
    }

    isEmpty = function() {
        return this.heap.length === 0;
    }
    heapify = function(index) {
        let targetIndex = index;
        const leftIndex = 2*index + 1;
        const rightIndex = 2*index + 2;
        //keeping maxHeap in mind
        //                          a     >   b
        //in case of MaxHeap if leftIndex > index => perform assignment
        // if(leftIndex < this.heap.length && this.compare(this.heap[leftIndex], this.heap[index])) {
        //     targetIndex = leftIndex
        // }
        // // 
        // // in case of maxHeap if  value at rightIndex   >  targetIndex => perform assignment
        // if(rightIndex < this.heap.length && this.compare(this.heap[rightIndex], this.heap[targetIndex])) {
        //     targetIndex = rightIndex
        // }
        
        //keeping maxHeap in mind
        //compare function returns false when  a      <     b
        //in case of MaxHeap of        value at index <  value at leftIndex => perform assignment

        if(leftIndex < this.heap.length && !this.compare(this.heap[index], this.heap[leftIndex])) {
            targetIndex = leftIndex;
        }
        if(rightIndex < this.heap.length && !this.compare(this.heap[targetIndex], this.heap[rightIndex])) {
            targetIndex = rightIndex
        }
        if(targetIndex !== index) {
            this._swap(targetIndex, index);
            this.heapify(targetIndex);
        }
    }
    
    printHeap = function() {
        for(let i = 0; i < this.heap.length; i++) {
            process.stdout.write(this.heap[i] + " ");
        }
    }
}

module.exports = PriorityQueue;