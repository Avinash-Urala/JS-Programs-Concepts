function arrayToObject(arr) {
   const result = arr.reduce((acc, el, i) => {
        return {...acc, [el]: el}
    }, {});

    return result;
}

console.log(arrayToObject(['a', 'b', 'c', 'd']))