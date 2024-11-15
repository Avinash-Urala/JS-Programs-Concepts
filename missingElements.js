function missingElements(arr) {
    arr = arr.sort((a,b) => a - b);
    const result = [];
    const max_limit = arr[arr.length - 1];

    for(let i = 1; i < max_limit; i++) {
        if(arr.indexOf(i) === -1) {
            result.push(i);
            arr.splice(i-1, 0, i);
            // arr[i - 1] = i;
        }
    }
    console.log(arr);
    return result;
}

console.log(missingElements([1,2,3,5,6,8,9]))