function memoizeSum() {
    const cache = {};

    return function(a, b) {
        const key = `${a},${b}`;
        if(cache[key]) {
            console.log('memoized result');
            return cache[key]
        }

        const result = a + b;
        cache[key] = result;

        return result;
    }
}

const memoizedSum = memoizeSum()

console.log(memoizedSum(1, 2));
console.log(memoizedSum(1, 2));
console.log(memoizedSum(3, 4));
console.log(memoizedSum(3, 4));



