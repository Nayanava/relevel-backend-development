Array.prototype.isEmpty = function() {
    return this.length === 0;
}
Array.prototype.peek = function() {
    return this[this.length-1];
}

function largestRectangleHistogram(heights) {
    const stack = new Array();
    stack.push(-1);
    let index;
    let maxArea = 0;
    for(index = 0; index < heights.length; index++) {
        let minHt = Number.MAX_VALUE;
        while(stack.peek() !== -1 && heights[stack.peek()] >= heights[index]) {
            const curr = stack.pop();
            minHt = Math.min(minHt, heights[curr]);
            const area = minHt * (index - stack.peek() - 1);
            maxArea = Math.max(maxArea, area);
        }
        stack.push(index);
    }
    let minHt = Number.MAX_VALUE;
    while(stack.peek() !== -1) {
        const curr = stack.pop();
        minHt = Math.min(minHt, heights[curr]);
        const area = minHt * (index - stack.peek() - 1);
        maxArea = Math.max(maxArea, area);
    }
    return maxArea;
}

console.log(largestRectangleHistogram([2,1,5,6,2,3]));
console.log(largestRectangleHistogram([2,4]));