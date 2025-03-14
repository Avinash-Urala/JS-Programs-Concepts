function addNumbers(i, n) {
    let sum = 0;
    if (i > n) return sum;

    sum += addNumbers(i + 1, n);

}

console.log(addNumbers(1, 5));