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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    const map = {};
    lca(root, p, q, [], map);
    while(map[p.val].length > map[q.val].length) {
        map[p.val].pop();
    }
    while(map[q.val].length > map[p.val].length) {
        map[q.val].pop();
    }
    while(map[p.val].length) {
        const pNode = map[p.val].pop();
        const qNode = map[q.val].pop();
        if(pNode === qNode) {
            return pNode;
        }
    }
    return null;
};

const lca = function(root, p, q, ancestors, map) {
    if(root === null) {
        return;
    }
    ancestors.push(root);
    if(root === p || root === q) {
        map[root.val] = [...ancestors];
    }
    if(map[p.val] && map[q.val]) {
        return;
    }
    lca(root.left, p, q, ancestors, map);
    lca(root.right, p, q, ancestors, map);
    ancestors.pop();
}
//[3,5,1,6,2,0,8,null,null,7,4]
const node = new Node(3);
node.left = new Node(5);
node.right = new Node(1);
node.left.left = new Node(6);
node.left.right = new Node(2);
node.left.right.left = new Node(7);
node.left.right.right = new Node(4);
node.right.left = new Node(0);
node.right.right = new Node(8);
const p = node.left;
const q = node.left.right.left;

console.log(lowestCommonAncestor(node, p, q).val)