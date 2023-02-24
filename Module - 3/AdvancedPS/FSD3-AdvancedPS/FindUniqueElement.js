function findUniqueElement(array) {
    let result = 0;
    for(let number of array) {
        result ^= number;
    }
    return result;
}

console.log(findUniqueElement([1, 2, 3, 2, 1]));