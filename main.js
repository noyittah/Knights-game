const { board, health, playerPosition } = require("./generateMobs");
const doMove = require("./doMove");
const { exit } = require("process");
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

startGame();

function startGame() {
    let size = Math.floor(Math.random() * 100) +10 ;
    const matrix = Array(size).fill(Array(size));
    let points =  Math.floor(Math.random() * 100) ;
    console.log(`Hello! The board on which you are to play is a ${size} squres matrix.`)
    console.log(`As the game starts, you are entitled of ${points} poitns !`)
    getInputFromUser(board, 0, 0, points,size);
}

function getInputFromUser(board, i, j, points ,size) {
    rl.question(`Where do you wish to be heading? 
    1 - right
    2- left
    3 - up
    4 - down
    `, function (move)  {
        checkValidationMove(board, `${move}`, i, j, points,size)
    });
    
}
function checkValidationMove(board, move, i , j, points,size) {
    let isVlidate = true;
    let arr = ["1", "2", "3", "4"];
    if (!arr.includes(move)) isVlidate = false;
    if (i === 0 && move ==='3' ) isVlidate = false;
    if (i === board.length-1 && move === '4') isVlidate = false;
    if (j === 0 && move === '2') isVlidate = false;
    if (j ===  board.length-1 && move === '1') isVlidate = false;

    if (!isVlidate){ 
        console.log("You out from the border - Please try again :")
        getInputFromUser(board, i, j, points ,size)
    }
    else {
        console.log(" === MOVING === ")
        let results = doMove( board, i, j, move, points);
        console.log("correct I : " +(results['i'] ) + " correct J : " +results['j'] + " ||| Correct Points is : " + results.points )
        results.matrix = board;
        size = board.length;
       checkStatus(results ,size);
    }
}

function checkStatus(results ,size) {
    if (results.succeed) {
        
        if (results.i === (size - 1) && results.j === (size - 1)) {
             console.log("you wonnnnnnn");
             exit();
        } else {
             getInputFromUser(results.matrix, results.i, results.j, results.points);
        }
    } else {
        console.log("you loseeeeeeee");
        exit();
    }
}
