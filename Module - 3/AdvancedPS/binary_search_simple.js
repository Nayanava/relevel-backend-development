//Search - finding a desired result.
//Search space - the area on which we are trying to search for a particular item

// array of size 10 and I have to find if there is an element in the array with value 5
//we start with the first position or 0th index in the array and we see that it doesn't match 5
// next arr[1...9] - new search space

//------------------- Linear search ----------------------
function findElementUsingLinearSearch(arr, value) {
    let index = 0;
    for(let num of arr) {
        if(num === value) {
            return index;
        }
        index++;    
    }
    return -1;
}

function findElementUsingLinearSearchDifferentForLoop(arr, value) {
    for(let index = 0; index < arr.length; index++) {
        if(arr[index] === value) {
            return index;
        }
    }
    return -1;
}

console.log(findElementUsingLinearSearch([5, 4, 10, 8, 7, 11, 12], 8));


//Recursive Binary Search
function binarySearch(arr, lo, hi, target) {
    if(lo > hi) {
        return -1;
    }
    const mid = parseInt((lo + hi) / 2);
    if(arr[mid] === target) {
        return mid;
    }
    if(arr[mid] < target) {
        return binarySearch(arr, mid+1, hi, target);
    }
    return binarySearch(arr, lo, mid-1, target);
}

console.log(binarySearch([1, 3, 4, 5, 8, 10, 12], 0, 6, 3));
console.log(binarySearch([1, 3, 4, 5, 8, 10, 12], 0, 6, 9));
console.log(binarySearch([1, 3, 4, 5, 8, 10, 12], 0, 6, 12));

//Iterative Approach
const binarySearchIterative = (arr, lo, hi, target) => {
    while(lo <= hi) {
        const mid = parseInt((lo + hi) / 2);
        if(arr[mid] === target) {
            return mid;
        } else if(arr[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearchIterative([1, 3, 4, 5, 8, 10, 12], 0, 6, 3));
console.log(binarySearchIterative([1, 3, 4, 5, 8, 10, 12], 0, 6, 9));
console.log(binarySearchIterative([1, 3, 4, 5, 8, 10, 12], 0, 6, 12));

// find the floor of a number in a sorted array
//floor(x) == the maximum value which is less than or equal to x
//[1, 3, 5, 6, 7, 8, 10] - floor(6) = 6 - floor(4) = 3

const floor = (arr, target) => {
    let lo = 0, hi = arr.length - 1;
    while( lo <= hi) {
        const mid = parseInt((lo + hi) / 2);
        if(arr[mid] === target) {
            return mid;
        }
        if(arr[mid] > target) {
            hi = mid - 1;
        } else {
            lo = mid+1;
        }
    }
    return hi;
}

let arr = [1, 2, 5, 6, 7, 8, 10];
let index = floor(arr, 9);
console.log('floor is: ')
index === -1 ? console.log("No floor present") : console.log(arr[index]);
index = floor(arr, 0);
index === -1 ? console.log("No floor present") : console.log(arr[index]);

/*
[1, 2, 5, 6, 7, 8, 10]
[T, T, T, T, T, T, F]

there are two types of modified binary searches
1. my while condition will always be (lo < hi) and NOT (lo <= hi)
2. my answer will always be lo

*/
function modifiedFloor(arr, target) {
    let lo = -1, hi = arr.length - 1;
    while(lo < hi) {
        const mid = ( lo + hi + 1 )/2;
        if(arr[mid] <= target) {
            lo = mid;
        } else {
            hi = mid-1;
        }
    }
    return lo;
}

arr = [1, 2, 5, 6, 7, 8, 10];
index = modifiedFloor(arr, 9);
console.log('floor is: ')
index === -1 ? console.log("No floor present") : console.log(arr[index]);
index = modifiedFloor(arr, 0);
index === -1 ? console.log("No floor present") : console.log(arr[index]);



/*
We want to find the ceiling of a value in an array
ceiling(target) = the smallest number which is greater than or equal to the target
[1, 2, 5, 6, 7, 8, 10] , 10000
ceiling of (8) = 8
ceiling of (9) = 10
ceiling of (0) = 1
ceiling of (11) = 'No ceiling present'
ceiling of (4) = 5
[F, F, T, T, T, T, T]

hi = true;
lo is not always true
lo == hi -> terminating condition
the last lo === the first hi
*/

function ceilingModified(arr, target) {
    let lo = 0, hi = arr.length;
    while(lo < hi) {
        const mid = parseInt((lo + hi)/2);
        if(arr[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return lo;
}

arr = [1, 2, 5, 6, 7, 8, 10];
index = ceilingModified(arr, 9);
console.log('ceiling is: ')
index === -1 ? console.log("No ceiling present") : console.log(arr[index]);
index = ceilingModified(arr, 0);
index === arr.length ? console.log("No ceiling present") : console.log(arr[index]);
index = ceilingModified(arr, 11);
index === arr.length ? console.log("No ceiling present") : console.log(arr[index]);

/*
lo = 6, hi = 7;
mid = 6;
arr[mid] doesn't satisfy condition
lo = mid + 1;
10000
[1, 2, 3, 4, 5]

lo = 0, hi = 5;
mid = 2;
lo = 3, hi = 5;
mid = 4;
lo = mid + 1;
lo = 5, hi = 5;

lo = 7, hi = 7
*/