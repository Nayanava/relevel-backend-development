/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 var averageOfLevels = function(root) {
    const queue = new Array();
    queue.push(root);
    const result = [];
    while(queue.length) {
        let size = queue.length;
        let nodesCount = size, sum = 0;
        while(--size >= 0) {
            const node = queue.shift();
            sum += node.val;
            if(node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }
        }
        result.push(sum / nodesCount);
    }
    return result;l
};