Array.prototype.peek = function() {
    return this[this.length-1];
}
Array.prototype.isEmpty = function () {
    return !(this && this.length);
}
const sortUsingStack = function (arr) {
    const outputStack = new Array();

    while(!arr.isEmpty()) {
        let curr = arr.pop();
        while(!outputStack.isEmpty() && outputStack.peek() > curr) {
            arr.push(outputStack.pop());
        }
        outputStack.push(curr);
    }
    return outputStack;
}

console.log(sortUsingStack([18, 4, 15, 12, 10]));