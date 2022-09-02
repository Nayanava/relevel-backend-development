/**
 * Leetcode - 1047
 * 1047. Remove All Adjacent Duplicates In String
 * @param {string} s
 * @return {string}
 */
 Array.prototype.top = function () {
    if(this.length) {
        return this[this.length - 1];
    }
    return undefined;
}

var removeDuplicates = function(s) {
    const st = new Array();
    for(const ch of s) {
        if(st.length && st.top() === ch) {
            st.pop();
        } else {
            st.push(ch);
        }
    }
    return st.join("");
};