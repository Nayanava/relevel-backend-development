/*
    10^6 -> (2^3)^6 = 2 ^ 18 * 2 ^ 18 = 2 ^ 36 = O(n^2)
        O(nlog2n) -> read it as n * log of n base 2 = 18*2^18
*/

// ---------------- Merge Sort --------------------

//a1 -> is one of the sorted arrays
//a2 -> the other sorted array.
function merge(a1, a2) {
    result = [] //This array stores the sorted result of both a1 and a2
    //i points to a1, j points to a2, k points to result
    let i = 0, j = 0, k = 0;
    const m = a1.length, n = a2.length;

    while( i < m && j < n) {
        if(a1[i] < a2[j]) {
            result[k++] = a1[i++];
        } else {
            result[k++] = a2[j++];
        }
    }
    while( i < a1.length) {
        result[k++] = a1[i++];
    }
    while( j < a2.length) {
        result[k++] = a2[j++];
    }

    return result;
}

 console.table(merge([1, 2, 5, 7], [3, 4, 6, 8]))

 function mergesort(arr, low, high) {
     if(low >= high) {
        return;
     }
     const mid = parseInt((low + high) / 2);
     mergesort(arr, low, mid);
     mergesort(arr, mid+1, high);
     mergeForMergeSort(arr, low, mid, high);
 }

 function mergeForMergeSort(arr, low, mid, high) {
     let i = low, j = mid+1, k = 0;
     result = [];
     while( i <= mid && j <= high) {
         if(arr[i] <= arr[j]) {
             result[k++] = arr[i++];
         } else {
             result[k++] = arr[j++];
         }
     }
     while( i <= mid) {
         result[k++] = arr[i++];
     }
     while(j <= high) {
         result[k++] = arr[j++];
     }
     for(i = low, k = 0; i <= high; i++, k++) {
         arr[i] = result[k];
     }
 }

 arr = [2, 1, 5, 7, 5, 6];
 mergesort(arr, 0, 5);
 console.log(arr);

