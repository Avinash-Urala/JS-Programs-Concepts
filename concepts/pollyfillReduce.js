Array.prototype.myReduce = function(callBack, initial_value) {
    let acc = initial_value;

    for(let i = 0; i < this.length; i++) {
        acc = acc ? callBack(acc, this[i], i, this) : this[i]

    }

    return acc;
}


let result = [1, 2, 3, 4].myReduce((acc, el) => {
   return acc = acc + el;
}, 0);

console.log(result);