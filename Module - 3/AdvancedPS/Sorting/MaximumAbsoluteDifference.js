const maxAbsoluteDifference = (arr, k) => {
    arr.sort((a, b) => {
        return a - b;
    });
    console.log(arr);
    let i = 0, j = arr.length - 1;
    let sumOfMin = 0, sumOfMax = 0;
    for(; i < k; i++, j--) {
        sumOfMin += arr[i];
        sumOfMax += arr[j];
    }
    let remaining = 0;
    for(let next = i; next <= j; next++) {
        remaining += arr[next];
    }
    return Math.max(Math.abs(sumOfMax + remaining - sumOfMin), Math.abs(sumOfMin + remaining - sumOfMax));
}

console.log(maxAbsoluteDifference([18,4,15,12,10], 2));

