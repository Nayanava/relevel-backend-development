/*
Problem – Given a string you have to rearrange it in such a way that two adjacent characters will never be the same. If not possible return empty string.
Example -
Input - aab
Output - aba

input - aaabbcc
output - abcabca


a - 4, b - 2, c - 1
a, b, a, b, a, c, a


a - 1, b - 1, c - 0, d - 1

a b c a b c a b d a

....can't occur in k positions

*/

const PriorityQueue = require("./PriorityQueue");

function adjustAdjacentCharacters(s, k) {
    const freq = new Array(128).fill(0);
    for(let c of s) {
        freq[c.charCodeAt()]++;
    }
    const pq = new PriorityQueue(Infinity, (a, b) => a[1] > b[1]);
    for(let i = 0; i < 128; i++) {
        if(freq[i]) {
            pq.enqueue([String.fromCharCode(i), freq[i]]);
        }
    }
    let res = "";
    while(!pq.isEmpty()) {
        // const arr = new Array();
        // for(let i = 0; i < k; i++) {
            
        //     let [char, freq] = pq.dequeue();
        //     res = res.concat(char);
        //     if(--freq > 0) {
        //         arr.push([char, freq]);
        //     }
        //     if(arr.length && pq.isEmpty()) {
        //         return "";
        //     }
        // }
        // for(let i = 0; i < arr.length; i++) {
        //     pq.enqueue(arr[i]);
        // }
        let [char, freq] = pq.dequeue();
        res = res.concat(char);
        freq--;
        if(freq > 0) {
            if(pq.isEmpty()) {
                return "";
            }
            if(pq.peek()[1] <= freq) {
                [nextChar, charFreq] = pq.dequeue();
                res = res.concat(nextChar);
                if(charFreq-- > 1) {
                    pq.enqueue([nextChar, charFreq]);
                }
            }
            pq.enqueue([char, freq]);
        }
    }
    return res;
} 

//console.log(adjustAdjacentCharacters("aabc", 2));
console.log(adjustAdjacentCharacters("aaabc", 2));
console.log(adjustAdjacentCharacters("shaheen", 2));
console.log(adjustAdjacentCharacters("aaab", 2));
console.log(adjustAdjacentCharacters("nayanava", 2));