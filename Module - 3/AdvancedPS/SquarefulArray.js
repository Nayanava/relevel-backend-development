function isPerfectSquare(sum) {
    for(i = 1; i * i <= sum; i++) {
        if(i * i === sum) {
            return true;
        }
    }
    return false;
}

function dfs(arr) {
    const visited = new Array(arr.length).fill(false);
    let countOfSquarefulArrays = 0;
    for(let i = 0; i < arr.length; i++) {
        visited[i] = true;
        countOfSquarefulArrays += dfsUtil(arr, visited, 1, arr[i]);
        visited[i] = false;
    }
    return countOfSquarefulArrays;
}
function dfsUtil(arr, visited, index, value) {
    if(index === arr.length) {
        return 1;
    }
    let countOfSquarefulArrays = 0;
    for(let i = 0; i < arr.length; i++) {
        if(!visited[i] && isPerfectSquare(value + arr[i])) {
            visited[i] = true;
            countOfSquarefulArrays += dfsUtil(arr, visited, index+1, arr[i]);
            visited[i] = false;
        }
    }
    return countOfSquarefulArrays;
}

console.log(dfs([1, 17, 8]));