
exports.preorderTraversal = function(root) {
    if(root === null) {
        return;
}
    process.stdout.write(root.val + " ");
    this.preorderTraversal(root.left);
    this.preorderTraversal(root.right);
}

exports.inorderTraversal = function(node) {
    if(node === null) {
        return;
    }
    this.inorderTraversal(node.left);
    process.stdout.write(node.val + " ");
    this.inorderTraversal(node.right);
}