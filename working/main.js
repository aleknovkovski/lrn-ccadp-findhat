const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

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
        console.log("Which way?")
    }
}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);

async function askForMove() {
    return prompt('')
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