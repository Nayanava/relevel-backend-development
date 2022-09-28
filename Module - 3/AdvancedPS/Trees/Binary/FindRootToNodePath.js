const Node = require("./Node");

function rootToNodePath(root, x) {
    const stack = [];
    rootToNodePathUtil(root, x, stack);
    let length = stack.length;
    const result = []
    while(stack.length) {
        result.push(stack.pop());
    }
    return result;
}

function rootToNodePathUtil(root, x, stack) {
    if(root === null) {
        return false;
    }
    if(root.val === x) {
        stack.push(root.val);
        return true;
    }
    const left = rootToNodePathUtil(root.left, x, stack);
    if(left) {
        stack.push(root.val);
        return left;
    }
    const right = rootToNodePathUtil(root.right, x, stack);
    if(right) {
        stack.push(root.val);
        return right;
    }
    return false;
}

const node = new Node(1);
node.left = new Node(2);
node.right = new Node(3);
node.left.left = new Node(4);
node.left.right = new Node(5);
node.right.left = new Node(6);
node.right.right = new Node(7);

console.log(rootToNodePath(node, 5));