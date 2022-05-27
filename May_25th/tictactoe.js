/*
Q1 - what is the size of the board 3 x 3
Q2 - there are two players, and we take input from the player
Q3 - random input every time
- after every move we need to check if there is a winner?
- after every move we need to print the board
- do we mention we have a winner?
*/

function isThereAWinner(board, currRow, currCol) {
    // This function validates if we have a winner;
    //1. rows, columns, diagonal, anti-diagonal?
    let hasAWinner = true;
    for(let i = 0; i < 3; i++) {
        if(board[currRow][i] !== board[currRow][currCol]) {
            hasAWinner = false;
            break;
        }
    }
    if(hasAWinner) {
        return true;
    }
    hasAWinner = true;
    for(let i = 0; i < 3; i++) {
        if(board[i][currCol] !== board[currRow][currCol]) {
            hasAWinner = false;
            break;
        }
    }
    if(hasAWinner) {
        return true;
    }

    if(isPositionPartOfDiagonal(currRow, currCol)) {
        if( board[0][0] === board[currRow][currCol] && board[1][1] === board[currRow][currCol]
            && board[2][2] === board[currRow][currCol]) {
                return true;
            }
    }

    if(isPositionPartOfAntiDiagonal(currRow, currCol)) {
        return board[0][2] === board[currRow][currCol] && board[1][1] === board[currRow][currCol]
        && board[2][0] === board[currRow][currCol];
    }
    return false;
}

function isPositionPartOfDiagonal(row, col) {
    const pos = row * 3 + col;
    return pos === 0 || pos === 4 || pos === 8;
}
function isPositionPartOfAntiDiagonal(row, col) {
    const pos = row * 3 + col;
    return pos === 2 || pos === 4 || pos === 6;
}
function isUsersTurn(count) {
    return count % 2 == 0;
}

function nextMove(board) {
    let row, col;
    do {
        const move = parseInt(Math.random() * 9);
        row = parseInt(move / 3);
        col = move % 3;
        console.log(row, col);
    }while(board[row][col] != -1);
    return [row, col];
}

/* 
5
[0, 1, 2],
[3, 4, 5],
[6, 7, 8]
*/
function playGame() {
    // total 9 possible moves
    const board = [];
    for(let i = 0; i < 3; i++) {
        board[i] = [];
        for(let j = 0; j < 3; j++) {
            board[i][j] = -1;
        }
    }
    let count = 9;
    while(--count >= 0) {
        let [row, col] = nextMove(board);
        if(isUsersTurn(count)) {
            board[row][col] = 'X';
        } else {
            board[row][col] = 'O';
        }
        console.log(board);
        if(isThereAWinner(board, row, col)) {
            return board[row][col] === 'X' ? "Player is the winner" : "Computer is the winner";
        }
    }
    return "The game has ended in a draw";
}

console.log(playGame());