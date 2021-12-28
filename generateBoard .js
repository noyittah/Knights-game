const randomNumberGenerator = require("./randomNumberGenerator");

const generateBoard = () => {
    const dimensions = Math.floor(Math.random() * randomNumberGenerator(50) + 1);
    const board = Array(dimensions).fill(Array(dimensions));
    return board;
}
function generateIntialState() {
    return {
        board: generateBoard(generateBoard()),
        health: 100,
        playerPosistion: [0,0]
    }
}
module.exports = generateIntialState;





