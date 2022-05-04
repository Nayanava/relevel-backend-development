//Homework 
// Dry run the insertion sort code at home.
// Try to implement findSecondHighestPaidEmployee using an efficient function - basically
// efficient algorithm to find the second minimum value in an array.
// Implement selection sort and bubble sort using custom comparator.
// Sort the employees array using the above selection and bubble sort
// Sort the employess array using the Array.prototype.sort() function and passing custom comparator


/* Problem 1
Given an array of name of country, 
you are supposed to sort it in lexicographical order u
sing the selection sort.

Input: ["India", "Australia", "China", "Russia", "Brazil", "Japan"];
Output: ["Australia", "Brazil", "China", "India", "Russia"]

*/

function selectionSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        let indexOfMinValue = findIndexOfMinimumValue(arr, i);
        swap(arr, indexOfMinValue, i);
    }
    return arr;
}

//indexOfMinValue = ["India", "Australia", "China", "Russia", "Brazil", "Japan"]
function findIndexOfMinimumValue(arr, startIndex) {
    let indexOfMinValue = startIndex;
    for(let i = startIndex+1; i < arr.length; i++) {
        if(arr[indexOfMinValue] > arr[i]) {
            indexOfMinValue = i;
        }
    }
    return indexOfMinValue;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(selectionSort(["India", "Australia", "China", "Russia", "Brazil", "Japan"]))

//-----------------------------------------------------------------
/*
Given an object of employee name and there salary, 
find the second most paid employee of the company

Input :
arr=[{'name':'Ram','salary':100000},
    {'name':'Ramesh','salary':10000},
    {'name':'Rakesh','salary':500000},
    {'name':'Riya','salary':650000},
    {'name':'Rithik','salary':45000},
    {'name':'Ritesh','salary':230000}]
*/

function findKthHighestPaidEmployee(employees, k) {
    let n = employees.length;
    for(let i = 0; i < k; i++) {
        for(let j = 0; j <n-i-1; j++) {
            if(employees[j].salary > employees[j+1].salary) {
                swap(employees, j, j+1);
            }
        }
    }
    return [employees[n-k].name, employees[n-k].salary];
}

//HomeWork: Try to write the most efficient solution to find the second minimum in an array
function findSecondMinimum(employees) {
    
}

const employees=[{'name':'Ram','salary':100000},
    {'name':'Ramesh','salary':10000},
    {'name':'Rakesh','salary':500000},
    {'name':'Riya','salary':650000},
    {'name':'Rithik','salary':45000},
    {'name':'Ritesh','salary':230000}]
//console.log(findKthHighestPaidEmployee(arr, 2));

//--------------INSERTION SORT-------------------


/*
    [10, 30, 20, 15, 18, 7]
    [10, 15, 20, 30, 18, 7]
    [10, 15, 18, 20, 30, 7]
*/


function insertionSort(arr) {
    const n = arr.length;
    for(let i = 1; i < n; i++) {
        let currentElement = arr[i], j;
        for(j = i-1; j >= 0 && arr[j] - currentElement > 0; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentElement;
    }
    return arr;
}

console.log(insertionSort([10, 30, 20, 15, 18, 7]))

//Time Complexity of the algorithm
/*
Best case time complexity for Insertion Sort is - O(n)
Worst case time complexity for Insertion Sort is - 

[5, 4, 3, 2, 1] length of array = 5
4 - 1 (n-4)
3 - 2 (n-3)
2 - 3 (n-2)
1 - 4 (n-1)
1 + 2 + 3 + .... + (n-2) + (n-1)
T(n) = n * (n-1)/2;
T(n) = O(n^2)

S(n) = O(1)
*/

//-----------------Custom Comparator------------------
/*
A custom comparator is a function which is optional but can be passed to the sort function
to decide the sort order.
*/
//console.log(insertionSort(employees));

function genericSort(arr, customCompare) {
    const n = arr.length;
    for(let i = 1; i < n; i++) {
        let currentElement = arr[i], j;
        for(j = i-1; j >= 0 && customCompare(arr[j], currentElement) > 0; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentElement;
    }
    return arr;
}

function customCompare(a, b) {
    return a-b;
}

console.log('Using generic sort', genericSort([10, 30, 20, 15, 18, 7], customCompare));

console.log('Using generic sort to sort employees based on salaries', 
    genericSort(employees, (a, b) => a.salary-b.salary));

console.log(employees[employees.length - 2].name, employees[employees.length - 2].salary);

console.log('Sort based on name', 
    genericSort(employees, (a, b) => a.name.localeCompare(b.name))
);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const unsortedArray = [10, 30, 20, 15, 18, 7];
console.log(unsortedArray.sort());

console.log(unsortedArray.sort((a, b) => a - b));

