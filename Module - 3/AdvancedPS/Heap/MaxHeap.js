class MaxHeap {
    constructor(length = -1) {
        this.heap = new Array();
        if(length !== -1) {
            this.maxCapacity = length;
        }
        this.size = 0;
    }

    insert = function (value) {
        if(this.isFull()) {
            throw new Error("Heap is full");
        }
        this.heap.push(value);
        let index = this.size++;
        while(index > 0) {
            const pIndex = parseInt((index-1)/2);
            if(this.heap[pIndex] > this.heap[index]) {
                break;
            }
            this._swap(pIndex, index);
            index = pIndex;
        }
    }
    isFull = function() {
        return this.size === this.maxCapacity;
    }
    _swap(pIndex, index) {
        const temp = this.heap[index];
        this.heap[index] = this.heap[pIndex];
        this.heap[pIndex] = temp;
    }
    
    getMax = function() {
        return this.heap[0];
    }

    heapify = function(index) {
        const leftIndex = 2*index + 1;
        let largest = index;
        if(leftIndex < this.size && this.heap[leftIndex] > this.heap[index]) {
            largest = leftIndex;
        }
        const rightIndex = 2*index + 2;
        if(rightIndex < this.size && this.heap[rightIndex] > this.heap[largest]) {
            largest = rightIndex;
        }
        if(largest !== index) {
            this._swap(largest, index);
            this.heapify(largest);
        }
    }
    extractMax = function() {
        this._swap(0, --this.size);
        const max = this.heap.pop();
        this.heapify(0);
        return max;
    }
    printHeap() {
        for(let i = 0; i < this.size; i++) {
            process.stdout.write(this.heap[i] + " ");
        }
        console.log();
    }
    isEmpty = function () {
        return this.size === 0;
    }
}

module.exports = MaxHeap;
