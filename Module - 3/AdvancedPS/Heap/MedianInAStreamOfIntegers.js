/*

Explanation-
1, 2, 4 | 5, 6

1.we have one sorted array
1. we split the array into almost two equal halves

if I split a sorted array into two equal halves and in the middle
the last element of the left half is the max element of that half..
the first element of the right half is the min element of that half..

in case of even numbers.
    (the last element of the left half + the first element of the right half)/2 is my median
in case of odd numbers.
    the last element of the left half will be my answer.

we need the maximum element from the left half and the minimum element from the right half

there is one last thing - 
median is always either the middle element of the half of the two middle elements.

if I fetch the max from the left side and I fetch the min from the right side - these two should
be the authentic middle elements.

1, 2, 4, 5 | 6, 7, 8, 9
if the current size is odd.
if the element is less than the minimum element of the right hand side it will go to the left side
and vice versa.
immediately I need to check if the size of one of the heaps - the size of the other of the other 
is greater than 1???
    if the max heap is greater than the minHeap in size by 1- we will move the minElement to the minHeap
    and vice versa..

    when the number of elements is odd? 
    whichever heap is greater in size, we will return the peek of that heap.
*/