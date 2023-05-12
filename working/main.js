const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

// IO STUFF HERE

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const readLineAsync = msg => {
    return new Promise(resolve => {
        readline.question(msg, userRes => {
            resolve(userRes);
        });
    });
}

async function prompt(promptLine) {
    const userRes = await readLineAsync(promptLine);
    readline.close();
    return userRes
}

// MAIN CLASS
class Field {

    constructor(field) {
        this.field = field;
    }

    print() {
        this.field.forEach((row) => {
            let rowString = ''
            row.forEach((symbol) => {
                rowString += symbol
            })
            console.log(rowString)
        })
    }
}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);

async function askForMove() {
    return await prompt('Enter direction: ')
}

const playerPosition = {row: 0, column: 0};

function movePlayer(move) {
    if(move === 'd') {playerPosition.row = playerPosition.row +1}
    if(move === 'r') {playerPosition.column = playerPosition.column +1}
    if(move === 'l') {playerPosition.column = playerPosition.column -1}

    myField.field[playerPosition.row][playerPosition.column] = "*"
    myField.print()
}

function PlayGame() {
    myField.print()

    askForMove().then(r => movePlayer(r))
}

PlayGame()