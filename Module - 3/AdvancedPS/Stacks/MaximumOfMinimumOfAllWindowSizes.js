Array.prototype.isEmpty = function() {
    return !this || !this.length;
}

Array.prototype.peek = function() {
    return this[this.length-1];
}

const previousSmallerOnLeft = (arr) => {
    const stack = [];
    const PSL = new Array(arr.length);
    for(let i = 0; i < arr.length; i++) {
        while(!stack.isEmpty() && arr[stack.peek()] >= arr[i]) {
            stack.pop();
        }
        PSL[i] = stack.isEmpty() ? -1 : stack.peek();
        stack.push(i);
    }
    return PSL;
}

const nextSmallerOnRight = (arr) => {
    const stack = [];
    const NSR = new Array(arr.length);
    for(let i = arr.length-1; i >= 0; i--) {
        while(!stack.isEmpty() && arr[stack.peek()] >= arr[i]) {
            stack.pop();
        }
        NSR[i] = stack.isEmpty() ? arr.length : stack.peek();
        stack.push(i);
    }
    return NSR;
}

const maximumOfMinimumOfAllWindowSizes = (arr) => {
    const PSL = previousSmallerOnLeft(arr);
    const NSR = nextSmallerOnRight(arr);

    const resultArr = new Array(arr.length).fill(Number.MIN_SAFE_INTEGER);
    for(let i = 0; i < arr.length; i++) {
        const length = NSR[i] - PSL[i] - 1;
        resultArr[length-1] = Math.max(resultArr[length-1], arr[i]);
    }

    for(let i = arr.length - 2; i >= 0; i--) {
        resultArr[i] = Math.max(resultArr[i], resultArr[i+1]);
    }
    return resultArr;
}

console.log(maximumOfMinimumOfAllWindowSizes([10, 20, 30, 50, 10, 70, 30]));
console.log(maximumOfMinimumOfAllWindowSizes([10, 20, 30]));