
class Stack {
    constructor(capacity = -1) {
        this.top = null;
        if(capacity === -1) {
            capacity = Infinity;
        }
        else if(capacity <= 0) {
            throw new Error("the capacity of the stack should be at least 1");
        }
        this.capacity = capacity; // the maximum number of elements the stack can hold
        this.size = 0; // the current number of elements in the stack.
    }
    push(val) {
        if(this.isFull()) {
            throw new Error(`the stack has already reached its maximum capacity of ${this.capacity}`);
        }
        const newNode = new Node(val);
        if(!this.top) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
        return newNode;
    }
    pop() {
        if(this.isEmpty()) {
            throw new Error('Stack is already empty');
        }
        let toBePopped = this.top;
        if(!this.top.next) {
            this.top = null;
        } else {
            this.top = this.top.next;
        }
        this.size--;
        return toBePopped;
    }

    peek() {
        return this.top;
    }
    isEmpty() {
        return this.top === null
    }
    
    isFull() {
        return this.size === this.capacity;
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


try {
    const stack = new Stack(2);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    console.log(stack.pop().val);
    console.log(stack.pop().val);
    stack.push(4);
    console.log(stack.pop().val);
    console.log(stack.peek().val);
    stack.push(5);
console.log(stack.peek().val);

    console.log(stack.pop().val);
    console.log(stack.pop().val);
    console.log(stack.pop().val);
} catch (error) {
    console.log(error.message);
}

module.exports = Stack;
/*
Homework
Implement a function called insertElementAtBottom which takes a number as input and it inserts the
value at the bottom of that stack.
*/
