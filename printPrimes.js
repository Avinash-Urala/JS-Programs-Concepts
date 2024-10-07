function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false
        }
    }
    return true;
}

function printPrimes(n) {
    const primes = [];

    for(let i = 2; i < n; i++) {
        if(isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}
console.log(printPrimes(25));