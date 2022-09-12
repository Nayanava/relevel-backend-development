/*
Leetcode - 1653
Given a string S made up of characters `a` and `b`. You need to count the minimum deletion needed to make the string balanced.
A string is said to be balanced only if there doesnt exists a pair (i,j) where i<j and s[i]=’b’ and s[j]=’a’
Example 
Input-1 aababbab 
Output: 2

Explaination:
On removing the element at position 3 and 6 then the balanced string will be aabbbb and count 2

a - a - b - a - b - b - a - b
*/
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
};