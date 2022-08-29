/*
Implement a function that takes a string which contains various parenthesis like ( ) { } [ ] as an
input and returns whether it checks if it is the valid parenthesis or not .
● E.g. when we pass the following string to the function "({[]})” it should return true and if we pass
this string “{[(]}]” , it should return false
● Try to implement this logic using following stack functions : push , pop , isEmpty
*/

const Stack = require("./stack");

function isvalidParentheses(parentheses) {
    if(parentheses.length%2 !== 0) {
        return false;
    }
    const stack = new Stack(parentheses.length/2);
    for(let bracket of parentheses) {
        if(isClosingBracket(bracket)) {
            if(stack.isEmpty()) {
                return false;
            }
            const openingBracket = stack.pop().val;
            if(!isMatchingBrackets(openingBracket, bracket)) {
                return false;
            }
        } else {
            if(stack.isFull()) {
                return false;
            }
            stack.push(bracket);
        }
    }
    return stack.isEmpty();
}

function isClosingBracket(bracket) {
     return bracket === ')' || bracket === '}' || bracket === ']';
}

function isMatchingBrackets(openingBracket, closingBracket) {
    switch (closingBracket) {
        case '}':
            return openingBracket === '{';
        case ')':
            return openingBracket === '(';
        case ']':
            return openingBracket === '[';
        default:
            return false;
    }
}

console.log(isvalidParentheses('[{()}]'));
console.log(isvalidParentheses('[{()}'));
console.log(isvalidParentheses('[{()'));
console.log(isvalidParentheses(')}]({['));
console.log(isvalidParentheses('(()()[[]]{{{}}})'))
console.log(isvalidParentheses('()()[[]]{{{}}}))'))