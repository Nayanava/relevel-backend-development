function distance(root, node) {
    if(root === null) {
        return 0;
    }
    if(root === node) {
        return 1;
    }
    left = distance(root.left, node);
    right = distance(root.right, node);
    
    return left || right ? left + right + 1 : 0;
}