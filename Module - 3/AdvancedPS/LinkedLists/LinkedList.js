/*
1. Try deletion from beginning :: def: deleteFromBegin()
2. Deletion from end :: def: deleteFromEnd()
3. Deletion of a particular node. :: deleteNode(node)
*/

class Node {
    //data
    //pointer to the next Node
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //insert at the beginning
    //insert at the end
    //delete a node
    //print a linkedList
    //search for a node
    insertAtBegin = (val) =>{
        this.length++;
        if(this.head === null) {
            this.head = new Node(val);
            this.tail = this.head;
            return this.head;
        }
        const temp = new Node(val);
        temp.next = this.head;
        this.head = temp;
        return this.head;
    }

    insertAtEnd(val) {
        this.length++;
        if(!this.head) {
            this.head = this.tail = new Node(val);
            return this.head;
        }
        const temp = new Node(val);
        this.tail.next = temp;
        this.tail = temp;
        return this.tail;
    }

    insertAfter(val, node) {
        if(!node) {
            return this.insertAtBegin(val);
        }
        if(node === this.tail) {
            return this.insertAtEnd(val);
        }
        this.length++;
        const temp = new Node(val);
        temp.next = node.next;
        node.next = temp;
        return temp;
    }

    insertAtPosition(val, index) {
        if(index === 0) {
            //Option 1:
            return this.insertAfter(val, null); //inserting in the beginning
            //Option 2:
            //return this.insertAtBegin(val);
        }
        if(index === this.length) {
            //Option 1:
            return this.insertAfter(val, this.tail);
            //Option 2:
            //return this.insertAtEnd();
        }
        let iterator = this.head;
        while(--index > 0) {
            iterator = iterator.next;
        }
        return this.insertAfter(val, iterator);
    }
    printList() {
        let temp = this.head;
        while(temp != null) {
            console.log(temp.val);
            temp = temp.next;
        }
    }
}

const list = new LinkedList();
//list.insertAtBegin(4);
list.insertAtBegin(3);
list.insertAtBegin(2);
list.insertAtBegin(1);
list.insertAtEnd(5);
list.insertAtEnd(6);
//list.insertAfter(4, node);
list.insertAtPosition(4, 3);
list.printList();
console.log('length is: ',list.length);