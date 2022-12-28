const Node = require("./Node");

class Queue {
    constructor(maxCapacity = -1) {
        if(maxCapacity !== -1 && maxCapacity <= 0) {
            throw new Error("Invalid queue capacity. ")
        }
        this.maxCapacity = maxCapacity;
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    isEmpty = function() {
        return this.size === 0;
    }

    isFull = function () {
        return this.size === this.maxCapacity;
    }

    length = function () {
        return this.size;
    }
    // same as insertAtEnd of linkedList.
    enqueue = function (val) {
        if(this.isFull()) {
            throw new Error("The Queue has reached its maximum capacity!");
        }
        const newNode = new Node(val);
        if(this.front === null) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            newNode.prev = this.rear;
            this.rear = newNode;
            //or
            //this.rear.next = this.rear
        }
        this.size++;
        return newNode;
    }

    dequeue = function() {
        if(this.isEmpty()) {
            throw new Error("The Queue is already empty!");
        }
        let deletedNode;
        deletedNode = this.front;
        if(this.size === 1) {
            this.front = this.rear = null;
        } else {
            this.front = this.front.next;
            this.front.prev = null;
            deletedNode.next = deletedNode.prev = null;
        }
        this.size--;
        return deletedNode.val;
    }

    getFront = function() {
        return this.isEmpty() ? null : this.front.val;
    }

    traverse() {
        let temp = this.front;
        while(temp != null) {
            process.stdout.write(temp.val + " ");
            temp = temp.next;
        }
        console.log();
    }
}

module.exports = Queue;