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
 var rightSideView = function(root) {
    if(!root) {
        return [];
    }
    const map = {};
    const queue = new Array();
    queue.push(root);
    let level = 0;
    while(queue && queue.length) {
        let size = queue.length;
        while(--size >= 0) {
            const temp = queue.shift();
            map[level] = temp.val;
            if(temp.left) {
                queue.push(temp.left);
            }
            if(temp.right) {
                queue.push(temp.right);
            }
        }
        level += 1;
    }
    const result = new Array(level);
    for(let i = 0; i < level; i++) {
        result[i] = map[i];
    }
    return result;
};