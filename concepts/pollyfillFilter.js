Array.prototype.myFilter = function(cb) {
    let temp = [];

    for(let i = 0; i < this.length; i++) {
        if(cb(this[i], i, this)) {
            temp.push(this[i]);
        }
    }

    return temp;
}

const result = [1,2,3,4].myFilter((el) => el % 2 !== 0);
console.log(result);