/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(arr) {
    let result = [];
    const n = arr.length;
    arr.sort((a, b) => a - b);
    const target = 0;
    for(let a = 0; a < n-2; a++) {
        if(a !== 0 && arr[a] === arr[a-1]) {
            continue;
        }
        let b = a+1, c = n-1;
        while(b < c) {
            if(arr[a] + arr[b] + arr[c] === target) {
                result.push([arr[a], arr[b], arr[c]]);
                b++;c--;
                while(b < c && arr[b] === arr[b-1]) {
                    b++;
                }
                while(c > b && arr[c] === arr[c+1]) {
                    c--;
                }
            } else if(arr[a] + arr[b]+ arr[c] < target) {
                b++;
                while(b < c && arr[b] === arr[b-1]) {
                    b++;
                }
            } else {
                c--;
                while(c > b && arr[c] === arr[c+1]) {
                    c--;
                }
            }
        }
    }
    return result;
};