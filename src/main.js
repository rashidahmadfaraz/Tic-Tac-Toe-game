// this line imports the 'readline' module, which allows the program to read input from the command line and write output back to it.
const readline = require ('readline');

// Defines the 'main' function that encapsulates the game logic.
function main () {
    // sets up the readline interface, connectiing it to the standard input and output streams of the process.
    const r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
// Initializes the game board as a 3x3 array filled with spaces, indicating all cells are initially empty.
    let board = [
        ['','',''],
        ['','',''],
        ['','',''],
    ];
    // sets the initial player to 'X', who will make the first move.
    let currentPlayer = 'X';
    // function to print the current state of the board in a formatted way to make it clear and readable.
    function printBoard () {
        console.log(`/n
        ${board[0][0]} | ${board[0][1]} |${board[0][2]}
        ${board[1][0]} | ${board[1][1]} |${board[1][2]}
        ${board[2][0]} | ${board[2][1]} |${board[2][2]}
        `);
    }
    // function to check if the current player has won by checking all possible winning combinations.
    function checkwin () {
        for (let i = 0; i < 3; i++) {
            // for a win condition check cheack each row and column.
            if (board[i][0] === currentPlayer && board [i][1] === currentPlayer && board[i][2] === currentPlayer ||
                board[0][1] === currentPlayer && board [1][i] === currentPlayer && board[2][i] === currentPlayer) {
                    return true;
          }
        }

    // check both diagonals for a win condition.
    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board [2][2] === currentPlayer ||
        board[0][2] === currentPlayer && board[1][1] === currentPlayer && board [2][0] === currentPlayer) {
            return true;
        }
        return false;
}
// function to check for a tie by verifying if all cells are filled and no winner has been declared.
function checkTie() {
    return board.flat().every(cell => cell !== '');
}
// function to alternate the active player between 'X' and '0". 
function switchPlayer() {
    currentPlayer = currentPlayer === 'x' ? 'O' : 'X';
}
//function that handles each move made by the players.
function play(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer; // place the current players's mark on the selected cell.
        of (checkwin()) {
            printBoard();
            console.log(`Player ${currentPlayer} wins!`); // Annouces a win and prompts for replay.
            askReplay();
        } else if (checkTie ()){
            printBoard();
            console.log('The game is a tie!'); //Annouces a tie and prompts for replay.
            askreplay();
        }
    }
}

}