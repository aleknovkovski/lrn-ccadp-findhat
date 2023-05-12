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

    calcNewPosition(move) {
        if (move === 'd') {
            this.playerX += 1
        }
        if (move === 'r') {
            this.playerY += 1
        }
        if (move === 'l') {
            this.playerX += 1
        }
    }

    printNewPosition() {
        this.field[this.playerX][this.playerY] = "*"
        this.print()
    }

    askForMove() {
        return prompt('')
    }

    outOfRange() {
        return !(
            Boolean(this.field[this.playerX]) &&
            Boolean(this.field[this.playerY])
        )
    }

    inHole() {
        return this.field[this.playerX][this.playerY] === "O"
    }

    isHat() {
        return this.field[this.playerX][this.playerY] === "^"
    }
}

function generateField() {
    const field = new Array(5).fill(0)
        .map(el => new Array(7).fill(fieldCharacter));

    //
    field.forEach(row => {
        row.forEach((el,index) => {
            const random = Math.random();
            row[index] = random > 0.5 ? fieldCharacter : hole
        })
    })


    return field
}

const myField = new Field(generateField());


function PlayGame() {
    let gameOver = false

    while (!gameOver) {
        myField.print()
        myField.calcNewPosition(myField.askForMove())

        if (myField.outOfRange()) {
            console.log('Ooops out of bounds')
            gameOver = true
        }  else if (myField.inHole()) {
            console.log('Ooops hole')
            gameOver = true
        } else if (myField.isHat()){
            console.log('Yay you got the hat')
            gameOver = true
        } else {
            myField.printNewPosition()
        }
    }
}

PlayGame()