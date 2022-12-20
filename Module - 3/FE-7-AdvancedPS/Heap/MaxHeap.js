/*
    Max Heap -> a binary tree data structure(represented in the form of an array)
    where every parent node(non-leaf node || internal node) is greater than both its children
*/

class MaxHeap {
    constructor(maxCapacity) {
        this.heap = new Array();
        this.maxCapacity = maxCapacity;
    }

    isFull = function() {
        return this.heap.length === this.maxCapacity;
    }

    insert = function(data) {
        if(this.isFull()) {
            throw new Error('already reached maximum limit');
        }
        this.heap.push(data);
        let child = this.heap.length-1;
        while(child > 0) {
            const parent = parseInt((child-1)/2);
            if(this.heap[parent] > this.heap[child]) {
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

    extractMax = function() {
        if(this.isEmpty()) {
            throw new Error('Heap is already empty');
        }
        const max = this.heap[0];
        this._swap(0, this.heap.length-1);
        this.heap.pop();
        this.heapify(0);
        return max;
    }

    isEmpty = function() {
        return this.heap.length === 0;
    }
    heapify = function(index) {
        let targetIndex = index;
        const leftIndex = 2*index + 1;
        if(leftIndex < this.heap.length && this.heap[leftIndex] > this.heap[index]) {
            targetIndex = leftIndex;
        }
        const rightIndex = 2 * index+2;
        if(rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[targetIndex]) {
            targetIndex = rightIndex;
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

module.exports = MaxHeap;