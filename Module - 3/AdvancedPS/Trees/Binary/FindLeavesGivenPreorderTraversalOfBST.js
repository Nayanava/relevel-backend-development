let index = 1;
const leaves = [];
function findLeaves(pre) {
    if(pre.length <= 1) {
        return pre;
    }
    return findLeavesUtil(pre, -Infinity, 890, Infinity);
}

function findLeavesUtil(pre, min, curr, max) {
    if(index >= pre.length) {
        return;
    }
    const rootValue = pre[index];
    const rootIndex = index;
    if(min < rootValue && rootValue < curr) {
        index++;
        findLeavesUtil(pre, min, rootValue, curr);
    }
    if(curr < rootValue && rootValue < max) {
        index++;
        findLeavesUtil(pre, curr, rootValue, max);
    }
    if(rootIndex === index - 1) {
        leaves.push(rootValue);
    }
}
findLeaves([890, 325, 290, 530, 965]);
console.log(leaves);
process.stdout.write(leaves.join(", "));