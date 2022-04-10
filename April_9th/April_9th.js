//An object for a student
const studentSamik = {
    firstName : 'Samik',
    age: 32,
    occupation: 'Software Engineer'
}

const studentGeetanjali = {
    firstName: 'Geetanjali',
    age: 35,
    occupation: 'Assistant Professor'
}

const studentAmrendra = {
    firstName: 'Amrendra',
    age: 35,
    occupation: 'Student'
}
//Array of Objects
const studentDatabase = [studentSamik, studentGeetanjali, studentAmrendra];

studentDatabase.push({
    firstName: 'Rehan',
    age: 25,
    occupation: 'Student'
});

console.log(studentDatabase);
for(let i = 0; i < studentDatabase.length; i++) {
    console.log(studentDatabase[i].firstName);
}



const samikInfo = ['Samik', 32, 'Software Engineer'];
const geetInfo = ['Geetanjali', 35, 'Assitant Professor'];
const amrendraInfo = ['Amrendra', 35, 'Student'];

//Array of Arrays
const studentsInfo = [samikInfo, geetInfo, amrendraInfo];
const rehanInfo = ['Rehan', 25, 'Student']
studentsInfo.push(rehanInfo);

console.log(studentsInfo);

for(let i = 0; i < studentsInfo.length; i++) {
    console.log(studentsInfo[i][0]);
}

const studentInfo = [
 /*0th index of the outer array holds an array*/   ['Samik', 32, 'Software Engineer'],
 /*1st index of the outer array holds an array*/    ['Geetanjali', 35, 'Assitant Professor'],
 /*2nd index of the outer array holds an array*/    ['Amrendra', 35, 'Student']
]

for(let index = 0; index < studentInfo[0].length; index++) {
    for(let i = 0; i < studentInfo.length; i++) {
        console.log(studentInfo[i][index]);
    }
}

for(let index = 0; index < studentInfo.length; index++) {
    console.log(studentInfo[index]);
}


console.log(bombExplosion([
    [2, 3], [2, 1]
], 4, 4))

//[[2, 3], [2, 1]]
function bombExplosion(bombCells, rowCount, colCount) {
    const mat = createAndInitMatrix(rowCount, colCount);
    const x = [-1, 1, -1, -1, 0, 0, 1, 1];
    const y = [0, 0, 1, -1, 1, -1, 1, -1];
    
    for(let i = 0; i < bombCells.length; i++) {

        // const[row, col] = bombcells[i]; [row, col] = [2, 3] 
        const row = bombCells[i][0];
        const col = bombCells[i][1]; 

        mat[row][col] = -1;
        for(let index = 0; index < x.length; index++) {
            newRow = row + x[index];
            newCol = col + y[index];
            if(isCellWithinMatrix(rowCount, colCount, newRow, newCol)) {
                mat[newRow][newCol]++;
            }
        }
    }
    return mat;
}

function isCellWithinMatrix(rowCount, colCount, row, col) {
    return row >= 0 && col >= 0 && row < rowCount && col < colCount;
}
function createAndInitMatrix(rowCount, colCount) {
    const mat = [];
    for(let i = 0; i < rowCount; i++) {
        mat[i] = [];
        for(let j = 0; j < colCount; j++) {
            mat[i][j] = 0;
        }
    }

    return mat;
}
/*
[
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    
    
]
*/

//------------------Transpose of a Matrix-------------------

/*

*/

const originalMatrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 1, 2, 3]
]

console.log(transposeMatrix(originalMatrix));

function transposeMatrix(originalMatrix) {
    const rowCount = originalMatrix.length;
    const colCount = originalMatrix[0].length;

    const newMatrix = [];
    for(let i = 0; i <colCount; i++) {
        newMatrix[i] = [];
        for(let j = 0; j < rowCount; j++) {
            newMatrix[i][j] = 0;
        }
    }
    for(let c = 0; c < colCount; c++) {
        for(let r = 0; r < rowCount; r++) {
            newMatrix[c][r] = originalMatrix[r][c];
        }
    }
    return newMatrix;
}

/*
1 2 3 4
5 6 7 8
9 1 2 3
*/

printWaveRow([
    [1, 6, 7, 12],
    [2, 5, 8, 11],
    [3, 4, 9, 10]
])

printWaveCol([
    [1, 6, 7, 12],
    [2, 5, 8, 11],
    [3, 4, 9, 10]
])

function printWaveRow(matrix) {
    const rowCount = matrix.length;
    const colCount = matrix[0].length;

    for(let row = 0; row < rowCount; row++) {
        if(row % 2 === 0) {
            for(let col = 0; col < colCount; col++) {
                console.log(matrix[row][col]);
            }
        } else {
            for(let col = colCount - 1; col >= 0; col--) {
                console.log(matrix[row][col]);
            }
        }
    } 
}
function printWaveCol(matrix) {
    const rowCount = matrix.length;
    const colCount = matrix[0].length;

    for(let col = 0; col < colCount; col++) {
        if(col % 2 === 0) {
            for(let row = 0; row < rowCount; row++) {
                console.log(matrix[row][col])
            }
        } else {
            for( let row = rowCount - 1; row >= 0; row--) {
                console.log(matrix[row][col]);
            }
        }
    }
}

