/**
 * @param {number[]} heights
 * @return {number}
 */

 Array.prototype.peek = function() {
    return this[this.length-1];
}

var largestRectangleArea = function(heights) {
    const st = new Array();
    st.push(-1);
    let maxArea = Number.MIN_VALUE;
    for(let i = 0; i < heights.length; i++) {
        let minHeight = Number.MAX_VALUE;
        while(st.peek() !== -1 && heights[st.peek()] >= heights[i]) {
            const index = st.pop();
            maxArea = Math.max(maxArea, heights[index] * ((i-1) - st.peek()));
        }
        st.push(i);
    }
    const length = heights.length;
    while(st.peek() !== -1) {
        let index = st.pop();
        maxArea = Math.max(maxArea, heights[index] * ((length-1) - st.peek()));
    }
    return maxArea;
};