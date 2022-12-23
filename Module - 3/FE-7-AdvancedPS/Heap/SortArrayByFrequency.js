/*

Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

 s consists of uppercase and lowercase English letters and digits.

Example 1:

Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.

*/

const PriorityQueue = require("./PriorityQueue");

/*
    character - 1 byte
            - 8 Bits
                -128 0 127 - ASCII
*/
/*
tree
e - 101
r - 112
t - 113
*/
function frequencyBasedSort(s) {
    const freqArr = new Array(128).fill(0);
    for(const character of s) {
        freqArr[character.charCodeAt()]++;
    }
    //arr - [char, freq]
    const pq = new PriorityQueue((a, b) => a[1] > b[1]);
    for(let i = 0; i < 128; i++) {
        if(freqArr[i]) {
            pq.enqueue([String.fromCharCode(i), freqArr[i]]);
        }
    }
    let res = "";
    while(!pq.isEmpty()) {
        let [char, freq] = pq.dequeue();
        while(--freq >= 0) {
            res = res.concat(char);
        }
    }
    return res;
}

console.log(frequencyBasedSort("tree"));
