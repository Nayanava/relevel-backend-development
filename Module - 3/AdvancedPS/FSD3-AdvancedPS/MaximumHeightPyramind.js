/*
Given n objects, with each object has width wi. We need to arrange them in a pyramidal way such that : 
 
1. Total width of ith level is greater than (i - 1)th.
2. Total number of objects in the ith is greater than (i - 1)th.

The task is to find the maximum height that can be achieved from given objects.

Input : arr[] = {40, 100, 20, 30}
Output : 2

1. 40 (1)
2. 120(100, 20, 30)

100
60+50+40

let level = 1, prevWidth = arr[0], prevObjectCount = 1;
let index = 1
while(index < arr.length) {
    let currWidth = 0, currObjectCount = 0
    while(currWidth <= prevWidth && currObjectCount <= prevObjectCount) {
        currWidth += arr[index++];
        currObjectCount++;
        if(index >= arr.length) {
            break;
        }
    }
    level++
}
return level;
*/