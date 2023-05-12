const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

// MAIN CLASS
class Field {

    constructor(field) {
        this.field = field;
        this.playerX = 0;
        this.playerY = 0;
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

    movePlayer(move) {
    if(move === 'd') {this.playerX += 1}
    if(move === 'r') {this.playerY += 1}
    if(move === 'l') {this.playerX += 1}

    myField.field[this.playerX ][this.playerY] = "*"
    myField.print()
}
}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);

function askForMove() {
    myField.movePlayer(prompt(''))
}



function PlayGame() {
    let gameOver = false
    while(!gameOver) {
        myField.print()
        askForMove()
    }
}

PlayGame()