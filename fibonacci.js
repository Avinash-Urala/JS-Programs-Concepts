function fibonacci(n) {
    var num1 = 0;
    var num2 = 1;

    for(let i = 1; i < n; i++) {
        let num3 = num1 + num2;
        console.log(num3);
        num1 = num2;
        num2 = num3;
    }
}

function fibonacciArray(n) {
    var fibonacci = [0, 1];

    for(let i = 1; i < n; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i]);
    }

    return fibonacci;
}

console.log(fibonacciArray(10));