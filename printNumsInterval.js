function printNumbersInSequence(n) {
    for(let i = 1; i <= n; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    }
}

console.log(printNumbersInSequence(10));