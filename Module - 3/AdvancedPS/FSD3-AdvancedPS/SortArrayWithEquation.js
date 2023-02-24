/*
Problem Statement - Given an array. Your task is to sort it using Stack.
For example –
Input – [2, 4, 1, 12, 14, 25, 35]
Output – [1, 2, 4, 12, 14, 25, 35]


 2, 4, 1, 12, 14, 25, 35

 2, 1
 35, 25, 14, 12, 4, 
temp - 2

stack - LIFO
topmost - smallest, smaller, small, ....

stack - monotonically decreasing in nature.


[]
resultStack - is monotonically decreasing nature
resultstack - 35, 25, 14, 12, 4, 2, 1

*/

Array.prototype.peek = function() {
    return this[this.length-1];
}
Array.prototype.isEmpty = function() {
    return this.length == 0;
}
function sortUsingStack(arr) {
    const resultStack = new Array();
    while(!arr.isEmpty()) {
        const current = arr.pop();
        while(!resultStack.isEmpty() && resultStack.peek() < current) {
            arr.push(resultStack.pop());
        }
        resultStack.push(current);
    }

    while(!resultStack.isEmpty()) {
        arr.push(resultStack.pop());
    }
    return arr;
}

console.log(sortUsingStack([2, 4, 1, 12, 14, 25, 35]));