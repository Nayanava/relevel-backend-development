
/*
Homework:
For localeCompare to be used in the given question.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare

Sorting algorithms which do not use any extra space are known as In-place sorting algorithms

Stability in algorithms - 
If we have the same value occuring multiple times in the array.
then after sorting, these elements will maintain their relative order of occurence
or relative ordering..

[4, 5, 1, 1, 3, 7, 10, 9, 15]
FIRST PASS - [1, 4, 5, 1, 3, 7, 10, 9, 15]
SECOND PASS - [1, 1, 4, 5, 3, 7, 10, 9, 15]
Value    Ordering or Position
------   --------------------
  4              0
  5              1
  1              2
  1              3
  3              4
  7              5
  10             6
  9              7
  15             8
*/

// -------------- Selection Sort ----------------
/*

    numbers - [4, 5, 1, 2, 3, 7, 10, 9, 15]

    auxArray - [1, 2, 3, 4, 5, 7, 9, 10, 15]


    What does selection sort do - it finds the minimum number first,
    and puts it in the first position, then the second and puts it in the 
    second position and so on and so forth till the entire array is in 
    sorted order.

    auxArray - [1, 2, 3, 4, 5, 7, 9, 10, 15]
                _, _, _, _, _, _, _, __, ___    

*/

/*
Imagine:: we were to find only the smallest element in the array
and swap the value of the 0th index with the index position
of the smallest value.
*/
function selectionSort(arr) {
/*
    let indexOfMinValue = findIndexOfMinimumValue(arr, 0);
    swap(arr, 0, indexOfMinValue);
    // after executing line 25 and 26 my array would be
    // [1, 2, 3, 4, 5, 7, 9], [15, 10]

    indexOfMinValue = findIndexOfMinimumValue(arr, 1);
    swap(arr, 1, indexOfMinValue);

    // after executing line 30 and 31 my array would be
    // [1, 2], [4, 5, 3, 7, 10, 9, 15]
*/

    for(let i = 0; i < arr.length-1; i++) {
        //the function should be read as,
        // find minimum element in the array starting from
        //index position i.
        let indexOfMinValue = findIndexOfMinimumValue(arr, i);
        swap(arr, i, indexOfMinValue);
    }
    return arr;
}

/*
index by index

index = 1
indexOfMinValue = 0,
is arr[0] > arr[1] - no

index = 2;
indexOfMinValue = 0,
is arr[0] > arr[2] ? yes - indexOfMinValue = 2

index = 3;
indexOfMinValue = 2;
is arr[2] > arr[3] ? no

index = 4;
indexOfMinValue = 2;
is arr[2] > arr[4] ? no
.
.
.
index = 8;
indexOfMinValue = 2;
is arr[2] > arr[8] ? no

return 2;
*/
// [4, 5, 1, 2, 3, 7, 10, 9, 15]
function findIndexOfMinimumValue(arr, index) {
    // let's assume that the smallest value is in the 0th index position
    let indexOfMinValue = index;
    for(let i = index + 1; i < arr.length; i++) {
        if(arr[indexOfMinValue] > arr[i]) {
            indexOfMinValue = i;
        }
    }
    return indexOfMinValue;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j]= temp;
}

/*
What is the time complexity of selection sort?
0th element - (n - 1)
1st element - (n - 2)
2nd element - (n - 3)
.
.
- 2
- 1

T(n) = (n-1) + (n-2) + (n-3) + ..... + 2 + 1
      1 to n - (n * (n + 1)) / 2
      replacing n with (n-1)
      (n-1) * (n- 1 + 1) / 2
      n * (n-1) / 2
    O(n^2)
*/

console.log("selectionSort->", selectionSort([4, 5, 1, 2, 3, 7, 10, 9, 15]))


//---------------- Bubble Sort ------------

/*
[5.1, 5.5, 5.0, 5.4, 5.7, 5.11, 5.8, 5.2]
[5.1, 5.0, 5.4, 5.5, 5.7, 5.8, 5.2, 5.11]
[5.0, 5.1, 5.4, 5.5, 5.7, 5.2, 5.8, 5.11]

[5, 3, 1, 2]


*/

function bubbleSortIntelligent(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(!swapAdjacentIntelligent(arr, arr.length - i - 1)) {
            break;
        }
    }
    return arr;
}

function bubbleSortNaive(arr) {
    for(let i = 0; i < arr.length; i++) {
        swapAdjacentNaive(arr);
    }
    return arr;
}
// after the iteration we know what?? (n - 1)th has the largest value
// so how far should I keep my next check - (n-1-1) = n-2
//so before the third pass begins, positions (n-1) & (n-2) have the sorted values or are sorted
// how far should I run my swap adjacent - (n-3), what is the value of i = 2, (n-i-1)
function swapAdjacentIntelligent(arr, endIndex) {
    let hasSwapped = false;
    for(let i = 0; i < endIndex; i++) {
        if(arr[i] > arr[i+1]) {
            hasSwapped = true;
            swap(arr, i, i+1);
        }
    }
    return hasSwapped;
}

function swapAdjacentNaive(arr) {
    for(let i = 0; i < arr.length-1; i++) {
        if(arr[i] > arr[i+1]) {
            swap(arr, i, i+1);
        }
    }
}

console.log("BubbleSort Intelligent->", bubbleSortIntelligent([4, 5, 1, 2, 3, 7, 10, 9, 15]));
console.log("BubbleSort Naive->", bubbleSortNaive([4, 5, 1, 2, 3, 7, 10, 9, 15]));

//In bubble sort - in every pass, we find the largest element which is placed at the end.

//Question - Given an array, we have to find the kth largest element
//1st largest will come in the 1st pass, n-1
//2nd largest will come in the 2nd pass, n-2
//3rd largest will come in the 3rd pass, n-3
//Kth largest will come in the kth pass.
// where will the kth largest element be positioned, which position?? arr[n-k]
/*
k = 2
[1, 2, 3, 4, 5, 6];
n = 6,
k = 3,
value = arr[n-k]
*/
function kthLargest(arr, k) {
    for(let i = 0; i <= k-1; i++) {
        if(!swapAdjacentIntelligent(arr, arr.length-i-1)) {
            break;
        }
    }
    return arr[arr.length-k];
}

//const k = prompt('Enter k');
console.log(`${k}th largest element is ${kthLargest([4, 5, 1, 2, 3, 7, 10, 9, 15], k)}`);

/*
k = 2nd smallest element
find the kth smallest element
can we say that then we are supposed to find the (n-k+1)th largest element

[1, 2, 3, 4, 5, 6];

2nd smallest = 2 is the 5th largest.
k = 2, length = n = 6, (n - k) = 4, (n-k+1)

n = 6,
k = 3,
value = arr[n-k]
*/