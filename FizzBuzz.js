
for (let i = 1; i <= 100; i++) {
    let result = [];

    if (i % 3 === 0) {
        result.push('Fizz')
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