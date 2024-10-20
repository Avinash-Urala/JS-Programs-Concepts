const removeUnwanted = (arr) => {
    let result = [];
    result = arr.filter(el => !!el);

    for(let i = 0; i < result.length; i++) {
        if(typeof result[i] === 'object' && Object.keys(result[i]).length === 0) {
            result.splice(i, 1);
        }
    }

    return result;
}

console.log(removeUnwanted([1,'22',{a: 2}, null, 0, 'Name', '', undefined, {}, 33, NaN]));