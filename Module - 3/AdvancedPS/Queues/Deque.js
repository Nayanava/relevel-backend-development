const Node = require("./Node");
const Queue = require("./Queue");

class Deque extends Queue {
    //additional support for
    //1. addFront()
    addFront = function(val) {
        if(this.isFull()) {
            throw Error("Queue is already full!");
        }
        const newNode = new Node(val);
        //1. if there are no elements in the queue currently
        if(this.isEmpty()) {
            this.front = this.rear = newNode;
        } else {
            this.front.prev = newNode;
            newNode.next = this.front;
            this.front = newNode;
        }
        this.size++;
        return newNode;
    }

    deleteRear = function() {
        if(this.isEmpty()) {
            throw Error("Queue is already empty!");
        }
        const deletedNode = this.rear;
        if(this.size === 1) {
            this.front = this.rear = null;
        } else {
            this.rear = this.rear.prev;
            this.rear.next = null;
            deletedNode.prev = null;
        }
        this.size--;
        return deletedNode;
    }

    getRear = function() {
        this.isEmpty() ? null : this.rear.val;
    } 
}

module.exports = Deque;