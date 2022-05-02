/*
[48]
[20, 28]
[8, 12, 16]
[3, 5, 7, 9]
[1, 2, 3, 4, 5]
*/

function arrSum(arr) {
    if(arr.length === 0) {
        return;
    }
    const newArr = [];
    for(let i = 0; i < arr.length - 1; i++) {
        newArr[i] = arr[i] + arr[i+1];
    }
    arrSum(newArr);
    console.log(arr);
}

/*
In Recursion basically there are kinds.
1. the larger values are dependent on the following recursions. eg: fibonacci.
2. the subseequent recursions are dependent on the previous recursion.
*/