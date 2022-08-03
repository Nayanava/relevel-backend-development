/*
T(n) = T(n-k) + 2
T(n-1) = T(n-k) + 2 + 2
T(n) = T(1) + 2+2+2+....+K
T(n)  = T(1) + 2*k
T(n) = O(n)

T(n) = T(n/2) + 2
     = T(n/4) + 2 + 2
     = T(n/8) + 2 + 2 + 2
     .
     .
     .
     .
     = T(n/2^k) + 2 * k 
    n/2^k = 1
    n = 2^k
    logn = log2^k
    logn = klog2
    k = logn/log2
    k = log(2)n
*/

const binarySearchIterative = (arr, target) => {
    let lo = 0, hi = arr.length-1;
    while(lo <= hi) {
        const mid = parseInt((lo + hi) / 2);
        if(arr[mid] === target) {
            return mid;
        } else if(arr[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return -(lo + 1);
}