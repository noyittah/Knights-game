const randomNumberGenerator = require("./randomNumberGenerator");
const generateBoard = () => {
    const dimensions = Math.floor(Math.random() * randomNumberGenerator(50) + 1);
    const board = Array(dimensions).fill(Array(dimensions));
    return board;
}
function generateIntialState() {
    const board = generateBoard();
    return {
        board: board,
        health: 100,
        playerPosition: [randomNumberGenerator(board.length - 1),randomNumberGenerator(board.length - 1)]
    }
}
module.exports = generateIntialState;



