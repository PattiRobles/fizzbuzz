

function fizzBuzz(n, w1, w2) {
    for (let i = 1; i <= n; i++) {
        let result = [];

        if (i % 3 === 0) {
            //result.push('Fizz')
            result.push(w1)
        }

        if (i % 5 === 0) {
            result.push('Buzz')
        }

        if (i % 7 === 0) {
            result.push('Bang')
        }

        if (i % 11 === 0) {
            result.push('Boom')
        }

        if (result.length === 0) {
            result.push(i)
        }
        console.log(result.join(''))
    }
}

const prompt = require("prompt-sync")();
let userInput = prompt("Please enter a maximum number: ")
let userFizz = prompt("Custom word for multiples of 3: ")

fizzBuzz(userInput, userFizz)