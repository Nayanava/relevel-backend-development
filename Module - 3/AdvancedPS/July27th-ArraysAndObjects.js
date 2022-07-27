//subarray with sum K
/*
    in subarray with sum 0
    -> we tried to see if there are same values that we saw previously?
    -> it means in case of 0, if I subtract whatever I added, then I will
    the same value.
    -> in case of K (in case of 0, imagine that sum > 0) {
        we are deducting something from sum to make it 0 , what should be deducted from sum 
        to make it equal to 0?? => sum - x = 0 => x = sum
    }
    -> imagine that your current sum > k
    -> what should we deduct from sum, so that my sum should be equal to k
    -> sum - x = k => x = sum - k

    {0, 2, 4, -1, -3, 4, -5, 5}, k = -4 => (0 - (-4)) = 4
    {0, 2, 6, 5, 2, 6, 1, 6}, (2 - (-4)) = 6, (-2 - (-4)) = 2
    6 - (-4) = 10, 10 previously and now the value is 6, (-4) got deducted from the sum 
    0 - 1
    2 - 1,
    6 - 1,
    5 - 1,

*/

const countSubarraySumEqualToK = (arr, k) => {
    const map = new Map();
    map.set(0, 1);
    let sum = 0, count = 0;
    for(let num of arr) {
        sum += num;
        if(map.has(sum - k)) {
            count += map.get(sum-k);
        }
        if(!map.has(sum)) {
            map.set(sum, 0);
        }
        map.set(sum, map.get(sum) + 1);
    }
    return count;
}

console.log(countSubarraySumEqualToK([0, 2, 4, -1, -3, 4, -5, 5, -10], -4))

//----------------------Longest Consecutive Sequence-------------------------
/*
Longest consecutive sequence – A sequence having elements as consecutive integers.
Consecutive integers can be in any order.
Problem – Given an array. You need to find the length of the longest consecutive sequence 
such that elements are consecutive integers.
For example –
Input – {35, 3, 4, 88, 9, 10, 21, 5, 6} - 
Output – 4

for(let i = 0; i < arr.length; i++) {
    let curr = arr[i] + 1; 
    while(true) {
        let j = 0;
        if(map.has(curr)) {
            max = max(max, ++count);
            curr += 1;
        }
        else {
            break;
        }
    }
}
*/

/*
sort the array - 3, 4, 5, 6, 9, 10, 35, 88, 89, 90, 91, 92
count = 1, max = 1;
for(let i = 1; i < arr.length; i++) {
    if(arr[i] === arr[i-1] + 1) {
        count += 1;
        max = max(max,count);
    } else { 
        count = 1;
    }
}

- O(nlogn)

freqArray - [maxNumber in the array + 1]
freqArray = new Array(89).fill(0);
for(let num in array) {
    freqArray[num]++;
}
count = 0, max = 1;
freqArray = [0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, .........., 1,....................,1]
for(let i = 0; i < num; i++) {
    if(arr[i] >= 1) {
        count += 1;
        max = max(max, count);
    }
    else {
        count = 0;
    }
}
- O(maxOfarr) - pseudo-polynomial time algorithm.
*/

// 3, 2, 0, -1, -2, -3, 4, 5
/*
3 gets searched n-1 times taking O(1) time each for search = n-1,
2 gets searched n-2 times taking O(1) time each for search = n-2,
1 gets searched n-3 times taking O(1) time each for search = n-3,
.
.
.
.-2 gets searched 1 times taking O(1) time each for search = 1,

0 com
1 comp
2
3
4
1, 2, 3, ...., (n-2), (n-1) = O(n^2)


4, 3, 2, 1, 0, -1, -2, -3
seen[4] = 2
seen[3] = 2
seen[2] = 2
seen[1] = 2
seen[0] = 2,
seen[-1] = 2,
seen[-2] = 2,
seen[-3] = 1
*/

const max = (a, b) => {
    return a > b ? a : b;
}

const longestConsecutiveSequence = (array) => {
    const set = new Set();
    for(let num of array) {
        set.add(num);
    }
    let count = 1, longest = 1;
    for(let num of array) { // 4, 3, 2, 0, -1, -2
        if(set.has(num - 1)) {
            continue;
        }
        let curr = num
        while(set.has(++curr)) {
            longest = max(longest, ++count);
        }
        count = 1;
    }
    return longest;
}

console.log(longestConsecutiveSequence([35, 3, 4, 88, 9, 10, 21, 5, 6]))

/*

Cycle Rotation – Cycle rotation is the rotation in which one rotation moves the last element of an array to the first place and shifts the remaining elements to the right.
Problem – Given an array. You need to shift all elements to the right by 1 and finally cyclically rotate whole array. For example –

Input – { 3, 88, 21, 5, 6}
Output – { 6, 3, 88, 21, 5}
     value = 6    {6, 3, 88, 21, 5}
*/

const cyclicRotation = (arr) => {
    const temp = arr[arr.length - 1];
    for(let i = arr.length-2; i >= 0; i--) {
        arr[i+1] = arr[i];
    }
    arr[0] = temp;
}

const cyclicArray = [3, 88, 21, 5, 6];
cyclicRotation(cyclicArray);
console.log(cyclicArray);

/*
Problem – Given an array. You need to shift negative elements to the end of an array. 
For example – 
Input – { -5, 3, -4, 88, -9, -10, 21, 5, 6}
Output – { 3, 88, 21, 5, 6, -5, -4, -9, -10 }

Solution
    positivePointer = 8 and a negativePointer = 8
    if my positivePointer is > my negativePointer then I swap both the values
    {-5, 3, -4, 88, -9, 6, 21, 5, -10}
    positivePointer = 7, negativePointer = 4
    {-5, 3, -4, 88, 5, 6, 21, -9, -10}
    positivePointer = 6, negativePointer = 2
    {-5, 3, 21, 88, 5, 6, -4, -9, -10}
    positivePointer = 5, negativePointer = 0
    {6, 3, 21, 88, 5, -5, -4, -9, -10}

*/

const shiftNegativesToRight = (arr) => {
    const n = arr.length;
    let pp = n-1, np = n-1;
    while(np >= 0 && pp >= 0) {
        while(pp >= 0 && arr[pp] < 0) {
            pp--;
        }
        while(np >= 0 && arr[np] > 0) {
            np --;
        }
        if(pp >= 0 && np >= 0 && np < pp) {
            swap(arr, pp, np);
        }
    }
}

const swap = (arr, left, right) => {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

const negToEnd = [-5, 3, -4, 88, -9, -10, 21, 5, 6];
shiftNegativesToRight(negToEnd);
console.log(negToEnd);