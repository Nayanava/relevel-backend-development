const Stack = require("./stack");
/*
Reverse a stack recursively.
Using the functionalities provided by the stack.
Reverse the stack recursively.
You are only allowed to use the functions push(), pop() and peek();


3 -> 2 -> 1
*/

function reverseAStack(stack, resultStack) {
    if(stack.isEmpty()) {
        return;
    }
    const popped = stack.pop().val;
    resultStack.push(popped);
    reverseAStack(stack, resultStack);
}

const st =  new Stack();
st.push(1);
st.push(2);
st.push(3);
console.log(st);
const resultStack = new Stack();
reverseAStack(st, resultStack);
console.log(resultStack);