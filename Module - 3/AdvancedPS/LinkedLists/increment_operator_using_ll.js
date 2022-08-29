// you have to implement the increment operator using a linked list
/*
    a number will be represented in the form of a linked list
    if number is 123, it will look like 
    1 -> 2 -> 3
    number++ = 1->2->4
    adding two numbers, 1->2->3 and the other number is 1->null
    a++ = 
    
    *** Solve it without recursion


    1 -> 2 -> 3

    1->2->9
    1->3->0
    9 9 9 0
    8 9 9 8
    1 0 9 9
    1 1 0 0
    8 9 9 8 9 9

    consecutive 9 are 2
    toal length = 6 
    8 9 9 9 0 0
    9 9 9 9
    1 -> 0 -> 0 -> 0 -> 0

    1. if there is no 9 in the end
    2. if there is a 9 in the end
        2.1 total 9's from the end = x
        2.2if(total 9's are less than total length){
            2.2.1 till (n - x - 1) copy as it is.
            2.2.2 n-xth digit = (digit + 1)
            2.2.3 remaining x digits = 0
        }
        2.3 else {
            2.3.1 initialize newHead with 1 as the val,
            2.3.2 remaining n digits = 0;
        }

*/  

function increment(head) {

    return newNode; //which is basically the incremented value.
}

