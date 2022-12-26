Array.prototype.isEmpty = function() {
    return this.length === 0;
}
Array.prototype.peek = function() {
    return this[this.length-1];
}

function trappingRainWater(heights) {
    const stack = new Array();
    let result = 0;
    for(let index = 0; index < heights.length; index++) {
        while(!stack.isEmpty() && heights[stack.peek()] < heights[index]) {
            const lastIndex = stack.pop();
            if(stack.isEmpty()) {
                break;
            }
            result += (Math.min(heights[index], heights[stack.peek()]) - heights[lastIndex]) * (index - stack.peek() - 1);
        }
        stack.push(index);
    }
    return result;
}

console.log(trappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(trappingRainWater([4,2,0,3,2,5]));