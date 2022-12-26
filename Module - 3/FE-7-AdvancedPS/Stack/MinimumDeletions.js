Array.prototype.isEmpty = function() {
    return this.length === 0;
}
Array.prototype.peek = function() {
    return this[this.length-1];
}

var minimumDeletions = function(s) {
    const stack = new Array();
    let count = 0;
    for(const char of s) {
        if(char === 'a') {
            if(!stack.isEmpty() && stack.peek() === 'b') {
                count++;
                stack.pop();
            } else {
                stack.push(char);
            }
        } else {
            stack.push(char);
        }
    }
    return count;
}

console.log(minimumDeletions("aababbab"));
console.log(minimumDeletions("bbaaaaabb"));