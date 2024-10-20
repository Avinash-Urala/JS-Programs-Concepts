Array.prototype.myMap = function(cb) {
    let temp = [];
    for(let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
    }

    return temp;
}


const result = [1,2,3,4].myMap((el) => el % 2);
console.log(result);