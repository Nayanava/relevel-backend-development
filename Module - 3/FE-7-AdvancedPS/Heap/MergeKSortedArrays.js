/*
Given a 2 D array consists of sorted rows. You have to combine all the arrays in 1 sorted array.
Input:
arr[][] = { {1, 3, 5, 7},
{2, 4, 6, 8},
{0, 9, 10, 11}} ;
Output: 0 1 2 3 4 5 6 7 8 9 10 11
add all elements to heap - m*n * log(m*n)
Heap - the first element that should be returned is the minimum - MinHeap
*/

const PriorityQueue = require("./PriorityQueue");


function megeKSortedArrays(mat) {
    const pq = new PriorityQueue(Infinity, (a, b) =>  a[0] < b[0]);
    const M = mat.length, N = mat[0].length;
    
    for(let row = 0; row < M; row++) {
      pq.enqueue([mat[row][0], row, 0]);  
    }

    const ans = [];
    while(!pq.isEmpty()) {
        const [value, row, col] = pq.dequeue();
        ans.push(value);
        if(col < N - 1) {
            pq.enqueue([mat[row][col+1], row, col+1]);
        }
    }

    return ans;
}

console.log(megeKSortedArrays([[1, 3, 5, 7],
    [2, 4, 6, 8],
    [0, 9, 10, 11]]));