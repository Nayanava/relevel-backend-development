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
    _swap = function(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}

module.exports = PriorityQueue;