const quicksortUtil = (arr, low, high) => {
    if(low >= high) {
        return;
    }
    const pivot = partition(arr, low, high);
    quicksortUtil(arr, low, pivot-1);
    quicksortUtil(arr, pivot+1, high);
}

const quicksort = (arr) => {
    quicksortUtil(arr, 0, arr.length-1);
}
function partition(arr, low, high) {
    let pivot = low;
    let greaterPtr = low+1; //tracking for elements greater than the pivot
    let lesserPtr = high; // tracking for elements less than the pivot
    while(greaterPtr < lesserPtr) {
        while( greaterPtr <= high && arr[greaterPtr] <= arr[pivot]) {
            greaterPtr++;
        }
        while(lesserPtr >= low && arr[lesserPtr] > arr[pivot]) {
            lesserPtr--;
        }

        if(greaterPtr < lesserPtr) {
            swap(arr, greaterPtr, lesserPtr);
        }
    }
    swap(arr, pivot, greaterPtr-1);
    return greaterPtr-1;
}
function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
const parition = (arr) => {
    partition(arr, 0, arr.length-1);
}
const arr = [4, 9, 8, 2, 3, 5, 10]
parition(arr);
quicksort(arr);
console.log(arr);

const arr1 = [4, 3, 8, 2, 1, 10, 9, 7]
parition(arr1);
quicksort(arr1);
console.log(arr1);

const allGreaterOnRight = [5, 5, 5, 7, 8, 9, 5];
parition(allGreaterOnRight);
quicksort(allGreaterOnRight);
console.log(allGreaterOnRight);

const allLesserOnRight = [4, 3, 2, 1, 0];
parition(allLesserOnRight);
quicksort(allLesserOnRight);
console.log(allLesserOnRight);


const quickSelect = (arr, k) => {
    return quickSelectUtil(arr, 0, arr.length - 1, k);
}

function quickSelectUtil(arr, low, high, k) {
    if(low === high) {
        return arr[low];
    }
    const pivot = partition(arr, low, high);
    //pivot is the rank in terms of overall context
    //but we need the rank in terms of the context of array between low to high
    const rank = pivot - low + 1;
    if( k === rank ) {
        return arr[pivot];
    }
    if(rank > k) {
        return quickSelectUtil(arr, low, pivot - 1, k);
    }
    return quickSelectUtil(arr, pivot + 1, high, k - rank);
}

console.log(quickSelect([0, 4, 3, 2, 1, 5, 6], 7));

