const Queue = require("../../Queues/Queue");
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

exports.levelOrderTraversal = function(root) {
    if(root == null) {
        return;
    }
    const queue = new Queue();
    queue.enqueue(root);

    while(!queue.isEmpty()) {
        let size = queue.length();
        while(--size >= 0) {
            const temp = queue.dequeue();
            if(temp.left) {
                queue.enqueue(temp.left);
            }
            if(temp.right) {
                queue.enqueue(temp.right);
            }
            process.stdout.write(temp.val + " ");
        }
        console.log();
    }
}