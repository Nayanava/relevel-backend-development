Array.prototype.top = function() {
    return this[this.length-1];
}

Array.prototype.isEmpty = function() {
    return !this || !this.length
}

function removeKDigits(number, k) {
    const stack = new Array();
    if(k > number.length) {
        return -1;
    }
    let index;
    for(index = 0; index < number.length; index++) {
        const char = number[index];
        while(!stack.isEmpty() && stack.top().charCodeAt() > char.charCodeAt() && --k >= 0) {
            stack.pop();
        }
        stack.push(char);
    }
    return stack.join("");
}

console.log(removeKDigits("123421", 3));