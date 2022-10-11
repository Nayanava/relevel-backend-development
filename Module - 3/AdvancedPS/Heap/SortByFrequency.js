/**
 * @param {number[]} nums
 * @return {number[]}
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
    peek = function() {
        return this.heap[0];
    }
    isEmpty = function() {
        return !(this.heap && this.heap.length);
    }
    _swap = function(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}
var frequencySort = function(nums) {
    /*
        an array of numbers lying between -100, 100
        could be between any range.
        how to calculate frequency??
            1.1 we have to find the existence of a number - O(1) time - map
                1.1.1 if not present initialize with 0.
            1.2 add 1 to the frequency/
        Pair<Key, Value> - key = number, value = frequency
        PriorityQueue.insert([number, frequency]) - either make it an array
        or make it an object = {
            number = number,
            frequency = frequency of the number
        };
        new PriorityQueue((a, b) => {
           if(a.freq !== b.freq) {
                return a.freq < b.freq;
           } 
           return b.value > a.value;
        })
        keep extracting min till the queue is empty
            
    */
    const freqMap = {};
    for(const number of nums) {
        if(!freqMap[number]) {
            freqMap[number] = 0;
        }
        freqMap[number] += 1;
    }
    const pq = new PriorityQueue((a, b) => {
       if(a.freq !== b.freq) {
            return parseInt(a.freq) > parseInt(b.freq);
       } 
       return parseInt(b.value) > parseInt(a.value);
    });
    for(let prop in freqMap) {
        pq.insert({
            value: prop,
            freq: freqMap[prop]
        });
    }
    let index = 0;
    while(!pq.isEmpty()) {
        const extracted = pq.extract();
        for(let i = 0; i < extracted.freq; i++) {
            nums[index++] = extracted.value;
        }
    }
    return nums;
};

console.log(frequencySort([8,-8,2,-8,-5,-3]))