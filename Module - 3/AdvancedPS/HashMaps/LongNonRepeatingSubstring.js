/*
a bca defgh abb

aaaaghabca
a = 3 = 1
a g h = 3
length = 6 - 3 = 3
b c a d e f g h
a = 3
b = 1
c = 2
d = 4
e = 5

f = 6 length = 6
g = 7 length = 7
h = 8, length = 8
a = 9, 
b = 10, length = 7
b = 11, 
// maxLength = 8;
// length = 8
// length = length - seen[a] + 1
//aaa gh a .... 5 - 2 = 3
I am supposed to consider all characters starting from the 
character next to the repeating character till the current character
if(current character was seen before and lies in the current window) {
    length = i -  seen[char[i]]; 
    maxLength = 3;
} else {
   length++; 
}
seen[char] = i;


*/
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    const occurenceMap = new Array(256).fill(-1);
    let maxLength = 0, length = 0;
    for(let i = 0; i < s.length; i++) {
        const charAscii = s[i].charCodeAt();
        if(occurenceMap[charAscii] >= i - length) {
            length = i - occurenceMap[charAscii];
        }  else {
            length++;
        }
        maxLength = Math.max(length, maxLength);
        occurenceMap[charAscii] = i;
    }
    return maxLength;
};
