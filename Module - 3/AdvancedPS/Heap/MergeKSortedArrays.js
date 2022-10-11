/*
{ 
{1, 3, 5, 7, 9, 12, 13},
{2, 4, 6, 8, 9, 10, 11},
}
 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 11, 12, 13

0, 1, 2
size = 4 * 3
heap - 4
3 - 3 log 4
m * n
nlogm
size of heap = m
3, 2, 9
4, 3, 9
5, 4, 9
4, 5, 9
0, 1, 2, 3, 4 .......

replaceMin - 
m rows and n columns. - n log m
    1. save the root, - O(1)
    2. replace the root with the new element - O(1)
    3. heapify on the root. - O(log m)
heapify - 
how many elements are there in total?? - m * n
what will be the new array size - m * n
=> for every element, I call replaceMin once.
O(m*n)logm not better than merge subroutine?

n * n
we always compare with a merged sorted array. - final array
 1st step - merge(arr[0],arr[1]) - mergedArray[]
 for (i = 2.... n)
    mergedArray = merge(mergedArray, arr[i]);
    1. we compare n and n = 2n
    2. we compare 2n and n = 3n
    3. we compare 3n and n = 4n
    4. we compare 4n and n = 5n
    .
    .
    .
    .
    n. we compare (n-1)*n and n = n*n
    2n + 3n + 4n + ..... n * n
    n ( 2 + 3 + 4 + .... n) = n * (n * (n + 1)/2 - 1) = O(n^3)


        [[],[],[],[],[]] - n
            /      \
        [[],[]]    [[],[]]
        /    \       /   \
      [[]]   [[]]  [[]]  [[]] - n number of merges
        \     /      \    / 
         [[],[]]     [[],[]] -  2n * n/2 number of merges
            [[], [], [], []] - 4n * n/4 
        (n / 2^k) - where (2 ^ k = n) => one single inner array
        merge calls - 2 ^ k merge calls 
    mergesort - nlogn
              - n log(n*n)
              - T(n) = 2T(n/2) + n*n
                     = 4T(n/4) + n^2 + n^2 + n^2 + .......
                     = 1 + n^2 * k
                     = k = logn/log2
                     = n^2logn

                     priorityQueue - {
                         row, col and value.
                     }
*/

const PriorityQueue = require("./PriorityQueue");

function mergeKSortedArrays(mat) {
    const queue = new PriorityQueue((a, b) => {
        return a.value > b.value;
    });
    let m = mat.length, n = mat[0].length
    const mergedArray = new Array(m*n);
    let index = 0, count = 0;
    for(let i = 0; i < mat.length; i++) {
        queue.insert({row: i, col: 0, value: mat[i][0]});
        count++;
    }
    while(!queue.isEmpty()) {
        const next = queue.extract();
        mergedArray[index++] = next.value;
        if(next.col < n-1) {
            queue.insert({row: next.row, col: next.col+1, value: mat[next.row][next.col+1]});
        }
    }
    return mergedArray;
}

console.log(mergeKSortedArrays([[1, 3, 5, 7], [2, 4, 6, 8], [0, 9, 10, 11]]));

