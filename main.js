const mobs = {
    monsters: require("./Monsters.json"),
    treasure: require("./Treasures.json")
}
/**
 * 
 * @param {number*} maximum 
 * @returns {number} random number
 */
function randomNumberGenerator(maximum) {
    return Math.floor(Math.random() * maximum);
}
/**
 * 
 * @param {matrix} board 
 * @returns {object} random number
 */
function randomPositionGenerator(board) {
    return {x: randomNumberGenerator(board.length - 1), y: randomNumberGenerator(board.length - 1)};
}
/**
 * 
 * @param {matrix} coordinates 
 * @returns {Object / undefined}
 */
function getPosition(coordinates) {
    return board[coordinates.x][coordinates.y]; // Will display what is present in the specified location.
}
/**
 * 
 * @returns {matrix}
 */
function generateMonster() {
    return mobs.monsters[Object.keys(mobs.monsters)[randomNumberGenerator(Object.keys(mobs.monsters).length)]];
}
/**
 * 
 * @returns {matrix}
 */
function generateTreasure() {
    return mobs.treasure[Object.keys(mobs.treasure)[randomNumberGenerator(Object.keys(mobs.treasure).length)]];
}
/**
 * 
 * @param {matrix} board 
 */
function insertItem(board) {
    let position = randomPositionGenerator(board);
    board[position.x][position.y] = Math.random() > 0.5 ? generateTreasure() : generateMonster();
}
/**
 * 
 * @param {matrix} board 
 * @returns {matrix}
 */
function generateMob(board) {
    for (let mobsAmount = board.length ; mobsAmount > 0; mobsAmount--) {
        insertItem(board);
    }
    return board;
}

function doMove(matrix1 , i1 , j1 , step , point1 ) { // 1 == right | 2 == left | 3 == up | 4 ==d down

    let arr ={
        matrix : matrix1 ,
        i : i1 , 
        j: j1 ,
        points : point1 , 
        succeed : true 
    }
if(step === "1")
{    
    if(!matrix1[i1][j1+1])
        {
           arr['j']= j1+1;
           console.log("Empty ! ")
            return arr;
        }
    {
        if(matrix1[i1][j1+1].damage === '-10')

            if(point1 - 10 <= 0 ) // losing
            {
                arr.succeed=false;
                return arr;
            }
            else {
                
                arr['j']=j1+1;
                console.log("Sorry ! you lose 10 points !  ")
                arr.points-=10;
                return arr;
            }

        }
        if(matrix1[i1][j1+1].damage === '-20')

        if(point1 - 20 <= 0 ) // losing
        {
            arr.succeed=false;
            return arr;
        }
        else {
            console.log("Sorry ! you lose 20 points !  ")
            arr['j']=j1+1;
            arr.points-=10;
            return arr;
        }
        if(matrix1[i1][j1+1].damage === '10')
        {
            arr['j']=j1+1;
            console.log("Yeesss ! you earn 10 points !  ")
            arr.points+=10;
            return arr;
        }
        if(matrix1[i1][j1+1].damage === '20')
        {
            console.log("Yeesss ! you earn 20 points !  ")
            arr['j']=j1+1;
            arr.points+=20;
            return arr;
        }
}
if(step ===  '2')
{   
    if(!matrix1[i1][j1-1])
        {
            arr['j']=j1 -1;
            return arr;
        }
        if(matrix1[i1][j1-1].damage === '-10')

            if(point1 - 10 <= 0 ) // losing
            {
                arr.succeed=false;
                return arr;
            }
            else {
                console.log("Sorry ! you lose 10 points !  ")
                arr.j--;
                arr.points-=10;
                return arr;
            }

        
        if(matrix1[i1][j1-1].damage ===' -20')
        {
        if(point1 - 20 <= 0 ) // losing
        {
            arr.succeed=false;;
            return arr;
        }
        else {
            console.log("Sorry ! you lose 20 points !  ")
            arr['j']=j1 -1;
            arr.points-=10;
            return arr;
        }
    }
        if(matrix1[i1][j1-1].damage === '10')
        {
            console.log("Yeesss ! you earn 10 points !  ")
            arr['j']=j1 -1;
            arr.points+=10;
            return arr;
        }
        if(matrix1[i1][j1-1].damage === '20' )
        {
            console.log("Yeesss ! you earn 20 points !  ")
            arr['j']=j1 -1;
            matrix1[i1][j1+1] = undefined;
            arr.points+=20;
            return arr;
        }
    }
    if(step ===  '3')
    {   
       
        if(!matrix1[i1-1][j1])
        {
            arr['i']=i1 -1;
            return arr;
        }
        {
            if(matrix1[i1-1][j1].damage === '-10')
    
                if(point1 - 10 <= 0 ) // losing
                {
                    arr.succeed=false;
                    return arr;
                }
                else {
                    console.log("Sorry ! you lose 10 points !  ")
                    arr['i']=i1 -1;
                    arr.points-=10;
                    return arr;
                }
            }
            if(matrix1[i1-1][j1].damage === '-20')
    
            if(point1 - 20 <= 0 ) // losing
            {
                arr.succeed=false;;
                return arr;
            }
            else {
                console.log("Sorry ! you lose 20 points !  ")
                arr['i']=i1 -1;
                arr.points-=20;
                return arr;
            }
            if(matrix1[i1-1][j1].damage === '10')
            {
                console.log("Yeesss ! you earn 10 points !  ")
                arr['i']=i1 - 1;
                arr.points+=10;
                return arr;
            }
            if(matrix1[i1-1][j1].damage === '20')
            {
                console.log("Yeesss ! you earn 20 points !  ")
                arr['i']=i1 -1;
                arr.points+=20;
                return arr;
            }
    }
        if(step === '4' )
        {   
           
        if(!matrix1[i1+1][j1])
        {
            arr['i']=i1 +1;
            return arr;
        }
        {
            if(matrix1[i1+1][j1].damage === '-10')
    
                if(point1 - 10 <= 0 ) // losing
                {
                    arr.succeed=false;
                    return arr;
                }
                else {
                    console.log("Sorry ! you lose 10 points !  ")
                    arr['i']=i1 +1;
                    arr.points-=10;
                    return arr;
                }
    
            }
            if(matrix1[i1+1][j1].damage === '-20')
    
            if(point1 - 20 <= 0 ) // losing
            {
                arr.succeed=false;;
                return arr;
            }
            else {
                console.log("Sorry ! you lose 20 points !  ")
                arr['i']=i1 +1;
                arr.points-=20;
                return arr;
            }
            if(matrix1[i1+1][j1].damage === '10')
            {
                console.log("Yeesss ! you earn 10 points !  ")
                arr['i']=i1 +1;
                arr.points+=10;
                return arr;
            }
            if(matrix1[i1+1][j1].damage === '20')
            {
                console.log("Yeesss ! you earn 20 points !  ")
                arr['i']=i1 +1;
                arr.points+=20;
                return arr;
            }

        }
return arr;
}

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
    const board = generateMob(matrix);
    let points =  Math.floor(Math.random() * 100) ;
    console.log(matrix);
    console.log("Hello , you will game at " + size + " squre matrix")
    console.log("You start with  : " + points + " poitns !")
    getInputFromUser(board, 0, 0, points,size);
}

function getInputFromUser(board, i, j, points ,size) {
    rl.question(`where do you want to go? 
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
        results.matrix = generateMob(Array(board.length).fill(Array(board.length)));
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
