const mobs = {
    monsters: require("./Json Files/Monsters.json"),
    treasure: require("./Json Files/Treasures.json")
}
const board = Array(100).fill(Array(100));
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
    for (let mobsAmount = board.length * 2; mobsAmount > 0; mobsAmount--) {
        insertItem(board);
    }
    return board;
}
generateMob(board);
