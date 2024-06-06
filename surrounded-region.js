/**
 * This function solves the "Surrounded Regions" problem. It takes a board
 * represented as a 2D array of characters, and modifies the board in-place
 * to mark 'O's that are surrounded by 'X's as 'X'. All other 'O's are marked
 * as 'O'.
 *
 * @param {character[][]} board - The game board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    // Get the dimensions of the board
    let row = board.length;
    let col = board[0].length;
    
    // Initialize an array to record the positions to be marked
    let recordingArray = Array(row).fill().map(() => Array(col).fill(0));
    
    // If the board is not a square, return null
    if(row !== col) {
        return null;
    }

    // Check the upper boundary
    for (let i = 0; i < board[0].length; i++) {
        if (board[0][i] === 'O') {
            recordingArray[0][i] = 1;
            checkUpDownRightLeft(board, recordingArray, row, col, 0, i);
        }
    }

    // Check the lower boundary
    for (let i = 0; i < board[row-1].length; i++) {
        if (board[row - 1][i] === "O") {
            recordingArray[row - 1][i] = 1;
            checkUpDownRightLeft(board, recordingArray, row, col, row - 1, i);
        }
    }
    
    // Check the left boundary
    for (let i = 0; i < board.length; i++) {
        if (board[i][0] === "O") {
            recordingArray[i][0] = 1;
            checkUpDownRightLeft(board, recordingArray, row, col, i, 0);
        }
    }
    
    // Check the right boundary
    for (let i = 0; i < board.length; i++) {
        if (board[i][col - 1] === "O") {
            recordingArray[i][col - 1] = 1;
            checkUpDownRightLeft(board, recordingArray, row, col, i, col - 1);
        }
    }

    // Mark the board
    for (let i = 0; i < recordingArray.length; i++) {
        for (let j = 0; j < recordingArray[i].length; j++) {
            if (recordingArray[i][j] === 0) {
                board[i][j] = "X";
            } else if (recordingArray[i][j] === 1) {
                board[i][j] = "O";
            }
        }
    }

    return board;
};

/**
 * Checks the up, down, right, and left directions of a given position in the board
 * and marks the corresponding positions in the recordingArray.
 *
 * @param {Array[]} board - The game board
 * @param {Array[]} recordingArray - The array to record the positions to be marked
 * @param {number} row - The number of rows in the board
 * @param {number} col - The number of columns in the board
 * @param {number} x - The x-coordinate of the position to check
 * @param {number} y - The y-coordinate of the position to check
 */
var checkUpDownRightLeft = (board, recordingArray, row, col, x, y) => {
    // Create an array of the positions to check
    let checkerArray = [[x-1, y], [x+1, y], [x, y-1], [x, y+1]];

    // Check each position in the checkerArray
    for(let i = 0; i < checkerArray.length; i++) {
        // If the position exists in the board, is an 'O', and not yet marked, mark it
        if( typeof board[checkerArray[i][0]]?.[checkerArray[i][1]] !== 'undefined' &&
            board[checkerArray[i][0]][checkerArray[i][1]] === 'O' &&
            recordingArray[checkerArray[i][0]][checkerArray[i][1]] === 0) {
            recordingArray[checkerArray[i][0]][checkerArray[i][1]] = 1;
            // Check the up, down, right, and left directions of the new position
            checkUpDownRightLeft(board, recordingArray, row, col, checkerArray[i][0], checkerArray[i][1]);
        }
    }

};

let board1 = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
];

console.log("InPut: ", board1);
console.log("OutPut: ", solve(board1));

let board2 = [
    ["X", "X", "X", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "O", "X"],
    ["O", "X", "X", "X"],
];

console.log("InPut: ", board2);
console.log("OutPut: ", solve(board2));

let board3 = [
    ["X", "X", "X", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "O", "X"],
    ["X", "O", "X", "X"],
];
// Give Error: 
console.log("InPut: ", board3);
console.log("OutPut: ", solve(board3));

let board4 = [
    ["X", "X", "X", "X"],
    ["X", "X", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
];
// Give Error:
console.log("InPut: ", board4);
console.log("OutPut: ", solve(board4));


let board5 = ["X"];
// Give Error:
console.log("InPut: ", board5);
console.log("OutPut: ", solve(board5));

