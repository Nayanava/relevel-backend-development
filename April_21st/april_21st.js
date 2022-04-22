/*
Recursion - a function calling itself
Onion - an onion is a layer with an onion inside.

finding sum of digits - 9817 (981) + 7 || (98) + 1 || (9) + 8 || 9
                                     25  ||     18      ||    17            
function sumOfDigits(number) = 
    the current digit (n%10) + sumOfDigits(remainingNumber -> (n/10));
    .
    .
    .
    if(number < 10) {
        return number;
    }

    Recurrence - the re occurence of the same functionality

    n! = n * (n-1)!
    (n-1)! = (n-1) * (n-2)!

    Mathematically when we represent a recursion problem
    this is known as a recurrence relationship.

    fact(n) = n * fact(n-1);
    if finding the factorial is a function represented by f
    f(n) = n * f(n-1)

    what will be the recurrence relationship for sum of digits 
    f(n) = f(n/10) + n%10;

*/

/*
Stack - is a pile of items for books, stack of coins, etc, etc.
Stacks - Last in first out. (the one that enters last will be the first to come out)

Stacks - push(), pop(), peek()
push() - adding to the top of the stack
|  |
|  |
|  |
|__|
pop() - remove from the top of the stack
peek() - get the topmost element from the stack
This is not actually present - but just to view the stack
showStack() - shows all the elements of the stack
push(5),
push(6), 
push(2), 
push(10), 
peek(),
pop(), 
pop(), 
peek(), 
peek(), 
push(2);
showStack();
*/

function a() {
    b();
}

function b() {
    c();
}

function c() {
    console.trace("call stack");
}

a();


//-----------Fibonacci Numbers--------------
/*
This is how a fibonacci series looks like
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55......

the current number = previous number + previous to previous number

nth = (n - 1)th + (n - 2)th
(n - 1)th = (n - 2)th + (n - 3)th
.
.
.
.
What is the recurrence relationship for fibonacci??
if the function fibonacci(n) is represented by f(n),
then,
f(n) = f(n-1) + f(n-2);
0 and 1 are < 2
what will be the terminating condition for fibonacci?
if(num < 2) {
    return num;
}
*/

function fibonacci(n) {
    if(n < 2) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(10));

function fibonacciWithArrays(n) {
    const f = [];
    f[0] = 0;
    f[1] = 1;
    for(let i = 2; i <= n; i++) {
        f[i] = f[i-1] + f[i-2];
    }
    return f[n];
}
console.log(fibonacciWithArrays(10));

function optimizedFibonacci(n) {
    let previous = 1, previousToPrevious = 0;
    for(let i = 2; i <= n; i++) {
        let current = previous + previousToPrevious;
        previousToPrevious = previous;
        previous = current;
    }
    return previous;
}

console.log(optimizedFibonacci(10));


//------------------Print In Increasing Order---------------

/*
    input n = 4;
    1
    2
    3
    4
    using recursion.
    f(n) = f(n-1) + console.log(n);

    if(n === 0) {
        return;
    }
    f(n) = f(n-1);
    console.log(n);
*/

function printIncreasing(n) {
    if(n === 0) {
        return;
    }
    printIncreasing(n-1);
    console.log(n);
}

printIncreasing(5);

function printDecreasing(n) {
    if(n === 0) {
        return;
    }
    console.log(n);
    printDecreasing(n-1);
}

printDecreasing(5);

// Check if an array is sorted in ascending order
/*
arr = [1, 2, 3, 4, 5]
output = true;

f(n) = arr[n] > arr[n-1] && f(n-1)

*/

function isArraySorted(arr, index) {
    if(index === 0) {
        return true;
    }
    return arr[index] > arr[index-1] && isArraySorted(arr, index-1);
}
arr = [1, 2, 3, 4, 5, 8, 7] 
console.log(isArraySorted(arr, arr.length-1));

//------- Calculate binary strings without any consecutive ones ------
/*
n = 3 (number of digits are 3)

n = 1| n = 2 | n = 3
0    | 00 01 | 000 001 010 
1    | 10    | 100 101

00 - 000 001
01 - 010 
10 - 100 101

_ _ _
1 0 0
0 0 0
0 1 0
1 0 1
0 0 1
we are trying to reach by filling the first digit and then second digit.....
till we finally are able to reach the nth digit??

if(n == 1) {
    if(prevDigit == 0) {
        return 2;
    } else {
        return 1;
    }
}

if(prevDigit == 0) {
    return recursion(n-1, 1) + recursion(n-1, 0)
} else {
    return recursion(n-1, 0);
}
*/

function calculateZeros(n, prevDigit) {
    if(n == 1) {
        if(prevDigit == 0) {
            return 2;
        } else {
            return 1;
        }
    }
    
    if(prevDigit == 0) {
        return calculateZeros(n-1, 1) + 
        calculateZeros(n-1, 0)
    } else {
        return calculateZeros(n-1, 0);
    }
}

console.log(calculateZeros(3, 0));
/*
        0
_ _ _ _ _ (0)
        1
_ _ _ _ _
0,
1
*/


//---------------- Friends Pairing Problem ----------------
/*
There are n friends, and they want to go to a party. Every person can either go alone
or pair up with another friend. Calculate the total number of ways in which these friends
can go to the party.

Input n = 3;
output = 4;

1 2 3 - (1, 2, 3)
        (1, (2,3))
        ((1, 2), 3)
        ((1, 3), 2)

1 decides to go alone - the different possible ways would be how 2 and 3 decide to go
if 2 and 3 decide to go together that is one way 
1 (23) 

1, (23) 
1, 2, 3
or they decide to go alone
1 2 3 4 

1 2 (3 4) - 2 ways (3, 4 || (3 4))
1 3 (2 4) - 2 ways
1 4 (2 3) - 2 ways

(n-1)*2 = 6
2 ways
if(n decides to go alone) {
    numberOfWays = f(n-1);
} else {
    (n-1) * f(n-2)
}


f(n) = f(n-1) + (n-1) * f(n-2);

if( n == 1 || n == 2) {
    return n;
}
*/

function findFriendPairs(n) {
    if( n === 1 || n === 2) {
        return n;
    }
    return findFriendPairs(n-1) + (n-1) * findFriendPairs(n-2);
}