
let sqMat = [
    [1, 0, 0, 0],
    [0, 2, 0, 0],
    [0, 0, 3, 0],
    [0, 0, 0, 4]
]

let recMat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
]


function isMatrixDiagonal(mat) {
    if(mat.length != mat[0].length) {
        return false;
    }
    for( let r = 0; r < mat.length; r++) {
        for(let c = 0; c < mat[0].length; c++) {
            if(r != c && mat[r][c] != 0) {
                return false;
            }
        }
    }
    return true;
}

console.log(isMatrixDiagonal(sqMat));
console.log(isMatrixDiagonal(recMat));


/*

const arr = [ [1, 2, 3, 4],
              [5, 6, 7, 8] 
            ]
arr[0][0]
*/

function addMatrixColumns(mat) {
    let result = [];
    for(let c = 0; c < mat[0].length; c++) {
        let sum = 0;
        for( let r = 0; r < mat.length; r++) {
            sum += mat[r][c];
        }
        result[c] = sum;
    }
    return result;
}

console.log(addMatrixColumns(sqMat));
console.log(addMatrixColumns(recMat));


/*
          0th col  1st col  2nd col
0th row ->   2,     15,     4
1st row ->   1,      2,     15
2nd row ->   2,     10,     7
*/
function findSumOfUpperAndLowerTriangularMatrix(mat) {
    let upperTriangularSum = 0, lowerTriangularSum = 0, diagonalSum = 0;

    for(let r = 0; r < mat.length; r++) {
        for( let c = 0; c < mat[0].length; c++) {
            if(r == c) {
                diagonalSum += mat[r][c];
            }
            else if( r < c ) {
                upperTriangularSum += mat[r][c];
            } else {
                lowerTriangularSum += mat[r][c];
            }
        }
    }
    return [upperTriangularSum + diagonalSum, lowerTriangularSum + diagonalSum];
}

function findSumOfUpperAndLowerTriangularMatrixApproach2(mat) {
    let upperTriangularSum = 0, lowerTriangularSum = 0, diagonalSum = 0;

    for(let r = 0; r < mat.length; r++) {
        for( let c = 0; c < mat[0].length; c++) {
            if( r <= c ) {
                upperTriangularSum += mat[r][c];
            } 
            if(r >= c) {
                lowerTriangularSum += mat[r][c];
            }
        }
    }
    return [upperTriangularSum, lowerTriangularSum];
}

console.log(findSumOfUpperAndLowerTriangularMatrix([
    [2,     15,     4],
    [1,      2,     15],
    [2,     10,     7]
]));

console.log(findSumOfUpperAndLowerTriangularMatrixApproach2([
    [2,     15,     4],
    [1,      2,     15],
    [2,     10,     7]
]));

/*
        0th col  1st col  2nd col 3rd col
0th row ->   2,     14,     15,     16
1st row ->   7,     18,     20,     22
2nd row ->   8,     21,     23,     24
3rd Row ->   10,    26,     27,     28
*/

function searchForX(mat, X) {
    let col = mat[0].length - 1, row = 0;
    while(( row < mat.length && col >= 0)) {
        if(X === mat[row][col]) {
            return [row, col];
        }
        if(X < mat[row][col]) {
            col--;
        } else {
            row++;
        }
    }
    return [-1, -1];
}

console.log(searchForX([
    [2,     14,     15,     16],
    [7,     18,     20,     22],
    [8,     21,     23,     24],
    [10,    26,     27,     28]
], 17));


function isMatrixSparse(mat) {
    let r = mat.length, c = mat[0].length;
    let countOfZeros = 0;

    for(let i = 0; i < r; i++) {
        for(j = 0; j < c; j++) {
            if(mat[i][j] === 0) {
                countOfZeros++;
            }
        }
    }

    // 3* 5 = 15, 8 + 7 = 15, 
    const halfOfMatrixSize = parseInt(r*c / 2);
    return countOfZeros > halfOfMatrixSize;
}

console.log(isMatrixSparse([
    [1, 0, 15, 0],
    [7, 1, 1, 22],
    [0, 0, 0, 0],
    [10, 0, 0, 28]
]));


function findUniqueElements(mat) {
    let max = 0;
    let countArr = [];
    for(let r = 0; r < mat.length; r++) {
        for(let c = 0; c < mat[0].length; c++) {
            max = Math.max(max, mat[r][c]);
            if(!countArr[mat[r][c]]) {
                countArr[mat[r][c]] = 1;
            } else {
                countArr[mat[r][c]]++;
            }
        }
    }

    for(let i = 0; i <= max; i++) {
        if(countArr[i] && countArr[i] === 1) {
            console.log(i);
        }
    }
}

findUniqueElements([
    [2, 14, 15, 18],
    [10, 18, 14, 22],
    [8, 21, 22, 15],
    [10, 14, 21, 28]
])