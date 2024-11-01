const sum = (a, b, c, d, e) => a + b + c + d + e;


const curry = (fn) => {
    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn(...args);
        }
        return (...next) => curried(...args, ...next)
    }
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)(4)(5));
console.log(curriedSum(1, 2)(3, 4)(5));
console.log(curriedSum(1, 2, 3, 4)(5));


function currying(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                return a + b + c + d
            }
        }    
    }
}
