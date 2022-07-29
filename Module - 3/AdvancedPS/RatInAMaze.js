
//avoid using global variables try returning values instead from deeper recursions
// let countOfPaths = 0;
function countPathsInMaze(matrix) {
    return countPathsInMazeUtil(matrix, 0, 0);
    //bad practice below approach
    // countPathsInMazeUtil(matrix, 0, 0);
    // return countOfPaths;
}
let rows = [0, 1];
let cols = [1, 0];

function countPathsInMazeUtil(matrix, rowIndex, colIndex) {
    if(rowIndex === matrix.length - 1 && colIndex === matrix[0].length-1) {
        return 1;
        //bad practice below approach
        //countOfPaths++;
    }
    let countOfPaths = 0;
    for(let i = 0; i < rows.length; i++) {
        const nextRow = rowIndex + rows[i];
        const nextCol = colIndex + cols[i];
        if(isSafe(matrix, nextRow, nextCol)) {
            countOfPaths += countPathsInMazeUtil(matrix, nextRow, nextCol);
            
        }
    }
    return countOfPaths;
}

function isSafe(matrix, row, col) {
    return row >= 0 && row < matrix.length && col >= 0 && col < matrix[0].length
            && matrix[row][col] === 1
}

console.log(countPathsInMaze([[1, 0, 0], 
                              [1, 1, 1],
                              [1, 1, 1]]));