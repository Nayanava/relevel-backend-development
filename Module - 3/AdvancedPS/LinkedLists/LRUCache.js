/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.map = {};
    this.list = new DoublyLinkedList();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!(key in this.map)) {
        return -1;
    }
    const node = this.map[key];
    this.list.moveToFront(node);
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(key in this.map) {
        const node = this.map[key];
        node.value = value;
        this.list.moveToFront(node);
    } else {
        if(this.size === this.capacity) {
            const deletedKey = this.list.deleteRear();
            delete this.map[deletedKey]
            this.size--;
        }
        const node = this.list.addFront(key, value);
        this.size++;
        this.map[key] = node;
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.front = null;
        this.rear = null;
    }
    
    addFront = function(key, value) {
        //return the node which has been newly added to be stored in the map.
        const newNode = new Node(key, value);
        return this.addFrontExistingNode(newNode);
    }
    
    addFrontExistingNode = function(node) {
        if(!this.front) {
            this.front = this.rear = node;
        } else {
            node.next = this.front;
            this.front.prev = node;
            this.front = node;
        }
        return node;
    }
    deleteRear = function() {
        const deletedNode = this.rear;
        if(this.front === this.rear) {
            this.front = this.rear = null;
        } else {
            this.rear = this.rear.prev;
            this.rear.next = null;
            deletedNode.prev = null;
        }
        return deletedNode.key;
    }
    moveToFront = function(node) {
        //1. already at the front
        if(this.front === node) {
            return;
        }
        //2. at the rear
            //1. delete from rear and addToFront
        if(this.rear === node) {
            this.deleteRear();
            this.addFrontExistingNode(node);
            return;
        }
        //3. anywhere in the middle
        node.prev.next = node.next;
        node.next.prev = node.prev;
        
        node.prev = node.next = null;
        this.addFrontExistingNode(node);
    }
}