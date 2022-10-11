const PriorityQueue = require("./PriorityQueue");

var reorganizeString = function(s) {
    
    /*
        first count of every element.
        a - 2, b - 1
        aabbbcddefghb
        a - 2, b - 4, c - 1, d- 2, e - 1, f - 1, g - 1, h - 1
        b - 3, a- 2, d - 2, c, e, f, g, h - 1
        b, in the next case if my element remains as b
        then temporarily pop b and use the next element
        
        b-2,a-1,d-2,c....-1
        b,a,b,d,b......
        b-1,a-1,d-1,c-1
        b - 2, d - 2
        b,d, b-1, d-1
        b

         aabbbcddefghb, k = 3
         b-3,a-2,d-2,c-1,e..h-1
         b-2,a-1,c..h - 1
         b-1,d..h - 1
         f..h - 1
         badbacbdefgh
    */
    const pq = new PriorityQueue((a, b) => {
        if(a.freq !== b.freq) {
            return b.freq > a.freq;
        }
    });
    const freqArr = new Array(26).fill(0);
    for(const char of s) {
        freqArr[char.charCodeAt() - 'a'.charCodeAt()]++;
    }
    for(let i = 0; i < 26; i++) {
        if(freqArr[i] !== 0) {
            pq.insert({value: String.fromCharCode('a'.charCodeAt() + i), freq: freqArr[i]});
        }
    }
    let result = new Array();
    while(!pq.isEmpty()) {
        const obj = pq.extract();
        result.push(obj.value);
        if(--obj.freq > 0) {
            pq.insert(obj);
        }
        if(!pq.isEmpty() && pq.peek().value === obj.value) {
            const temp = pq.extract();
            if(pq.isEmpty()) {
                return "";
            }
            const next = pq.extract();
            result.push(next.value);
            if(--next.freq > 0) {
                pq.insert(next);
            }
            pq.insert(temp);
        }
    }
    return result.join("");
};

console.log(reorganizeString("aab"));
console.log(reorganizeString("aaab"));