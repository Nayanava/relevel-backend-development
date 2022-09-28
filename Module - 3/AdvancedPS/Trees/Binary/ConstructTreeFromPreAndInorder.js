const Node = require("./Node");

function constructTree(preorder, inorder) {
    const inorderMap = {};
    for(let index in inorder) {
        inorderMap[inorder[index]] = index;
    }
    return constructTreeUtil(preorder, inorderMap, 0, preorder.length-1);
}
let preIndex = 0;
function constructTreeUtil(preorder, inorderMap, start, end) {
    if(start > end) {
        return null;
    }
    const node = new Node(preorder[preIndex]);
    const inorderIndex = inorderMap[preorder[preIndex]];
    node.left = constructTreeUtil(preorder, inorderMap, start, index-1);
    node.right = constructTreeUtil(preorder, inorderMap, index+1, end);

    return node;
}
