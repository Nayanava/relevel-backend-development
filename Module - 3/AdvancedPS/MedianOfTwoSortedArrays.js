function findMedian(arr1, arr2) {
    let lo = 0, hi = arr1.length;
    const totalLength = arr1.length + arr2.length;
    const split = (totalLength + 1) >>> 1;
    while(lo <= hi) {
        const mid = (lo + hi) >>> 1;
        const arr1Left = mid === 0 ? Number.MIN_VALUE : arr1[mid - 1];
        const arr2Left = mid === split ? Number.MIN_VALUE : arr2[split - mid - 1];
        const arr1Right = mid === arr1.length ? Number.MAX_VALUE : arr1[mid];
        const arr2Right = split - mid === arr2.length ? Number.MAX_VALUE : arr2[split - mid];
        if(arr1Left > arr2Right) {
            hi = mid - 1;
        } else if (arr2Left > arr1Right){
            lo = mid + 1;
        } else {
            if(totalLength % 2 === 0) {
                return (Math.max(arr1Left, arr2Left) + Math.min(arr1Right, arr2Right))/2;
            }
            else {
                return Math.max(arr1Left, arr2Left);
            }
        }
    }
    return -1;
} 

console.log(findMedian([1, 3, 5, 7], [4, 6, 9, 12, 14, 16]));
console.log(findMedian([1, 3, 5, 7], [4, 6, 9, 12, 16]));
console.log(findMedian([-5,3,6,12,15], [-12,-10,-6,-3,4,10]))