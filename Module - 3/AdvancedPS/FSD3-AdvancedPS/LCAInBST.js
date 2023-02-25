/*https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    return p.val > q.val? LCAUtil(root, q, p) : LCAUtil(root, p, q);
};

var LCAUtil = function(root, smaller, greater) {
    if((root.val > smaller.val && root.val < greater.val)
        || (root.val === smaller.val || root.val === greater.val)) {
            return root;
        }
    if(root.val < smaller.val) {
        return LCAUtil(root.right, smaller, greater);
    }
    return LCAUtil(root.left, smaller, greater);
}