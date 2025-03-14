// forward recursion
function printNumbers(i, n) {
    if (i > n) {
        return;
    }

    console.log(i);
    printNumbers(i + 1, n);
}

printNumbersBT(5, 5);

// backtracking

function printNumbersBT(i, n) {
    if (i < 1) return;

    printNumbersBT(i - 1, n);
    console.log(i);
}