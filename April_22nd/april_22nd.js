/*
IMPORTANT LINKS
ARRAY SLICE
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

*/

//---- Check if a String is a palindrome using recursion ------
//malayalam, racecar  22022022
//recursion is a function which can be called on smaller instances of the same problem
// the function is supposed to check if the first character and the last character matches?
// if they match, can I call the same function, with the string starting from the 2nd character
//and ending in the second last character.
/*
    function isPalindrome(x, 0, x.length - 1) -> if(x[0] == x[x.length-1]) {
        isPalindrome(x, 1, length - 2)
            isPalindrome(x, 2, length - 3)
                ....
                    ....
                        ....
                        if(startIndex >= endIndex) {
                            return true;
                        }

    }
*/

function isPalindrome(str, start, end) {
    if(start >= end) {
        console.log(start, end);
        return true;
    }
    return str[start] === str[end] && isPalindrome(str, start+1, end-1);
}

//Try to do the same thing using an array and use splice instead of slice 
//while calling the recursion
function isPalindromeUsingStringSlice(str) {
    if(str.length <= 1) {
        return true;
    }
    newStr = str.slice(1, -1);
    const result = str[0] === str[str.length-1] && isPalindromeUsingStringSlice(newStr);
    console.log(str);
    return result;
}


let str = 'malayalam';
console.log(isPalindrome(str, 0, str.length-1));
console.log(isPalindromeUsingStringSlice(str))

//----- Print the sum of elements in an array like a triangle -----

/*
arr = [1, 2, 3, 4, 5]

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

arrSum([1, 2, 3]);

/*
 (2 / 24) * 100
*/

//----- Power Set of a given Set ------

/*
(1, 2, 3) => all possible sets that can be created using the given numbers
 in the set without changing their relative positions
(1), (2), (3), (1, 2), (2, 3), (1, 3), (1, 2, 3) => 2^3 - 1 = 8 - 1 = 7 possible combinations
*/


function powerSet(arr, index, result) {
    
    if(result.length > 0) {
        console.log(result);
    }

    if(index === arr.length) {
        return;
    }
    for(let i = index; i < arr.length; i++) {
        result.push(arr[i]);
        powerSet(arr, i+1, result);
        result.pop();
    }
}


powerSet([1, 2, 3], 0, []);


// -------- Generate Parenthesis Recursively -------- //
/*
    count of Parenthesis = 2;
    ()(), (())

    count of Parenthesis = 3;
    ()()(), ((())), (())(), ()(()), (()())

    1. if we are said, we need to print all possible valid parentheses for n = 3;
    then ideally we will have 2 * n number of opening + closing brackets.
    
    2. number of opening brackets === number of closing brackets.
    3. closing brackets cannot come before opening brackets.
    4. count of opening brackets cannot be more than n.

*/

function printValidParenthesis(result, open, close, n) {
    if(result.length === 2 * n) {
        console.log(result.join(''));
        return;
    }

    if(open < n) {
        result.push('(');
        printValidParenthesis(result, open + 1, close, n);
        result.pop();
    }
    if(close < open) {
        result.push(')');
        printValidParenthesis(result, open, close + 1, n);
        result.pop();
    }
}

printValidParenthesis([], 0, 0, 3);

// ----- Lexicographical Printing Recursion ----- //
/*
    Input N = 14;
    1 to 30
    1 2 3 4 5 6 7 8 9 10 11 12 13 14
    1, 10, 11, 12, 13, 14, .... 19, 2, 20, 21, 22...., 29, 3, 30, 4, 5, 6, 7, 8, 9
*/

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
// console.log(arr.sort());


function printLexicographical(num, max) {
    if(num > max) {
        return;
    }
    if(num > 0) {
        console.log(num);
    }
    
    for(let i = 0; i <= 9; i++) {
        if(num == 0 && i == 0) {
            continue;
        }
        printLexicographical(num * 10 + i, max);
    }
}

printLexicographical(0, 25);

function permutations(str, index) {
    if(index == str.length) {
        console.log(str.join(''));
        return;
    }

    for(let i = index; i < str.length; i++) {
        swap(str, index, i);
        permutations(str, index+1);
        swap(str, index, i);
    }
}

function swap(str, i, j) {
    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;
}

permutations(['A', 'B', 'C'], 0);