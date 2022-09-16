Array.prototype.isEmpty = function() {
    return !this || !this.length;
}
class QueueUsingStack {
    constructor() {
        this.s1 = new Array();
        this.s2 = new Array();
    }

    enqueue = function (value) {
        while(!this.s2.isEmpty()) {
            this.s1.push(this.s2.pop());
        }
        this.s1.push(value);
    }

    dequeue = function () {
        while(!this.s1.isEmpty()) {
            this.s2.push(this.s1.pop());
        }
        return this.s2.isEmpty() ? null : this.s2.pop();
    }
}

const queue = new QueueUsingStack();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());