function NQueens(N) {
    matrix = new Array(N)
    for(let i = 0; i < N; i++) {
        matrix[i] = new Array(N).fill(0);
    }
    if(NQueensUtil(matrix, 0, N)) {
        return matrix;
    } else {
        return [];
    }
}
const NQueensUtil = (matrix, row, N) => {
    if(row === N) {
        return true;
    }
    for(let i = 0; i < N; i++) {
        if(isSafe(matrix, row, i, N)) {
            matrix[row][i] = 'Q';
            if(NQueensUtil(matrix, row+1, N)) {
                return true;
            }
            matrix[row][i] = 0;
        }
    }
    return false;
}

function isSafe(matrix, row, col, N) {
    //vertical
    for(let i = 0; i < N; i++) {
        if(matrix[i][col] === 'Q') {
            return false;
        }        
    }
    
    //diagonal
    for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if(matrix[i][j] === 'Q') {
            return false;
        }
    }
    //anti-diagonal
    for(let i = row - 1, j = col + 1; i >= 0 && j < N; i--, j++) {
        if(matrix[i][j] === 'Q') {
            return false;
        }
    }
    return true;
}
console.log(NQueens(4));