const { board, health, playerPosition } = require("./generateMobs");
const { exit } = require("process");
const getInputFromUser = require("./menu");

startGame();

function startGame() {
    let size = Math.floor(Math.random() * 100) +10 ;
    const matrix = Array(size).fill(Array(size));
    let points =  Math.floor(Math.random() * 100) ;
    console.log(`Hello! The board on which you are to play is a ${size} squres matrix.`)
    console.log(`As the game starts, you are entitled of ${points} poitns !`)
    getInputFromUser(board, 0, 0, points,size);
}
