/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const Node = require("./Node");

/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
 var distanceK = function(root, target, k) {
    //1. let us find the targetNode, to store the list of ancestors.
    const ancestors = [];
    const result = [];
    findAncestors(root, target, ancestors);
    console.log(ancestors);
    //2. given a starting node, and distance k, find the other nodes.
    for(const node of ancestors) {
        findNodes(node, k, result);
        k -= 1;
    }
    return result;
};

const findAncestors = function(root, target, ancestors) {
    if(root == null) {
        return false;
    }
    if(root === target) {
        ancestors.push(root);
        return true;
    }
    if(findAncestors(root.left, target, ancestors)) {
        ancestors.push(root);
        return true;
    }
    if(findAncestors(root.right, target, ancestors)) {
        ancestors.push(root);
        return true;
    }
    return false;
}

const findNodes = function(root, k, result) {
    if(root === null || k < 0) {
        return;
    }
    if(k === 0) {
        result.push(root.val);
        return;
    }
    findNodes(root.left, k-1, result);
    findNodes(root.right, k-1, result);
}

const root = new Node(3);
root.left = new Node(5);
root.right = new Node(1);
root.left.left = new Node(6);
root.left.right = new Node(2);
root.left.right.left = new Node(7);
root.left.right.right = new Node(4);
root.right.left = new Node(0);
root.right.right = new Node(8);


/*

class Employee {
    constructor(name, address, salary, designation, dateOfJoining, dateOfBirth) {
        this.name = name;
        this.address = address;
        this.salary = salary;
        this.designation = designation;
        this.dateOfJoining = dateOfJoining;
        this.dateOfBirth = dateOfBirth;
    }

    //1. uniquely identifiable
    //2. same hash generated for same key.
    _hash()
}
*/