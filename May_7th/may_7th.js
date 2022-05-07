/*
    We need to count the number of inversions that are present in an array.
    given an array, we need an inversion if there is an element A[i] > A[j] where (i < j);

    example: [1, 5, 3, 6, 2, 8]

    (5, 3), (5, 2), (3, 2), (6, 2)
    A[1] > A[2]

    [1, 3, 5], [2, 6, 8]
     0  1  2 -> mid = 2;
     left array = 3 (mid + 1 - low)
     low, low + 1, low + 2 .....
      2 - 1
*/

function countInversions(arr) {
    return mergesort(arr, 0, arr.length-1);
}

function mergesort(arr, low, high) {
    if(low >= high) {
        return 0;
    }
    const mid = parseInt((low + high) / 2);
    let count = mergesort(arr, low, mid);
    count += mergesort(arr, mid+1, high);

    count += merge(arr, low, mid, high);

    return count;
}


function merge(arr, low, mid, high) {
    let i = low, j = mid+1, k = 0;
    const result = [];
    let countOfInversions = 0;
    while( i <= mid && j <= high) {
        if(arr[i] <= arr[j]) {
            result[k++] = arr[i++];
        } else {
            countOfInversions += (mid + 1 - i);
            result[k++] = arr[j++];
        }
    }
    while(i <= mid) {
        result[k++] = arr[i++];
    }
    while(j <= high) {
        result[k++] = arr[j++];
    }

    for(i = low, k = 0; i <= high; i++, k++) {
        arr[i] = result[k];
    }

    return countOfInversions;
}

const arr = [8, 2, 1, 9, 7, 8];
//console.log(countInversions(arr));


function quicksort(arr, low, high) {
    if(low >= high) {
        return;
    }
    const pivot = parition(arr, low, high);
    quicksort(arr, low, pivot - 1);
    quicksort(arr, pivot + 1, high);
}

//[6, 5, 4, 3, 2], 7, [9, 8, 10]
//[2, 5, 4, 3, 6], 7, [9, 8, 10]
//[2, 5, 4, 3], 6, 7, [9, 8, 10]
//2, [5, 4, 3], 6, 7, [9, 8, 10]
//2, [3, 4], 5, 6, 7, [9, 8, 10]
//2, 3, [4], 5, 6, 7, [9, 8, 10]
//2, 3, 4, 5, 6, 7, [9, 8, 10]
//2, 3, 4, 5, 6, 7, [8], 9, [10]
//2, 3, 4, 5, 6, 7, 8, 9, [10]
//2, 3, 4, 5, 6, 7, 8, 9, 10

function parition(arr, low, high) {
    const pivot = low;
    let indexOfLastSmallerElement= low;
    for(let j = low + 1; j <= high; j++) {
        if(arr[j] <= arr[pivot]) {
            indexOfLastSmallerElement++;
            if(indexOfLastSmallerElement !== j) {
                swap(arr, indexOfLastSmallerElement, j);
            }
        }
    }
    swap(arr, indexOfLastSmallerElement, pivot);
    return indexOfLastSmallerElement;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
quicksort(arr, 0, arr.length-1);
console.log(arr);