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

function PlayGame() {
    myField.print()
    const playerPosition = [0, 0]
    askForMove().then(r => console.log(r))
}

PlayGame()