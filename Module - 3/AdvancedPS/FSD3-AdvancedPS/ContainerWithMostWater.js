function containerWithMostWater(heights) {
    let maxCapacity = 0, leftPillar = 0, rightPillar = heights.length-1;
    while(leftPillar < rightPillar) {
        maxCapacity = Math.max(maxCapacity, 
            Math.min(heights[leftPillar], heights[rightPillar]) * (rightPillar - leftPillar));
        if(heights[leftPillar] < heights[rightPillar]) {
            leftPillar++;
        } else {
            rightPillar--;
        }
    }
    return maxCapacity;
}

console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]))