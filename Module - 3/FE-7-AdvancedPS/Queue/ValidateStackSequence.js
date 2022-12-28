/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 Array.prototype.isEmpty = function() {
    return !this || !this.length;
}
Array.prototype.peek = function() {
    return this[this.length-1];
}
var validateStackSequences = function(pushed, popped) {
    const stack = new Array();
    let index = 0;
    for(const number of pushed) {
        stack.push(number);
        while(!stack.isEmpty()) {
            if(stack.peek() === popped[index]) {
                stack.pop();
                index++;
            } else {
                break;
            }
        }
    }
    return stack.isEmpty();
};