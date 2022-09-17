const Node = require("./Node");
const BinaryTree = require("./BinaryTree");

const node = new Node(1);
node.left = new Node(2);
node.right = new Node(4);

node.left.right = new Node(5);
node.left.right.right = new Node(7);
node.left.right.right.left = new Node(6);

node.right.left = new Node (12);
node.right.right = new Node(8);
node.right.left.right = new Node(13);


BinaryTree.preorderTraversal(node);
console.log();
BinaryTree.inorderTraversal(node);
console.log();

//Homework - implementing postorder and level order traversal.