/*
Given an array of n numbers . Each element in the array is at maximum k distance from its actual
position. Your task is to sort this kind of array with minimum time, where n = number of elements and k = distance from its
actual position

Input: [19, 18, 17, 14, 70, 60, 50], k = 3
Output: [14, 17, 18, 19, 50, 60, 70], k = 3

One sorting algorithm which takes care of putting an element in its correct position
in an already sorted array. - 
19, 18, 17, 14
[18, 19], [17, 14]
[18, 17, 19], [14]
[17, 18, 19], [14]
[14, 17, 18, 19], [70, 60, 50]
[14, 17, 18, 19, 50, 60, 70]
[18, 18, 19], [14]
[17, 18, 19], [14]
for(i = 1; i < n; i++) {
    let temp = arr[i];
    let j = i-1;
    for(;j >= Math.max(0, i-k) ; j--) {
        if(arr[j] > temp) {
            arr[j+1] = arr[j];
        } else {
            arr[j+1] = temp;
            break;
        }
    }
    if(arr[j] > temp) {
        arr[j] = temp;
    }
}


[19, 18, 17, 14, 70, 60, 50], k = 3

[19, 18, 17, 14]
minHeap = 4
14, 
[19 , 70, 60, 50]
k*logK + (n-k)logk
nlogk time
[14, 17, 18, 19, 50, 60, 70]
[19, 18, 17, 70]

function sortNearlySorted(arr, k) {
    let heap = new MinHeap(k+1);
    let start = 0
    for(i = 0; i <=k; i++) {
        heap.insert(arr[i]);
    }
    for(let i = k+1; i < n; i++) {
        arr[start++] = heap.extract(arr[i]);
        heap.insert(arr[i]);
    }
    while(!heap.isEmpty()) {
        arr[start++] = heap.extractMin();
    }
    return arr;
}
*/


