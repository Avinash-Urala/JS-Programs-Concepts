/** Convert one dimension array to two dimension array */
// 1. Using slice method

function oneToTwoDimensionSlice(arr, size) {
    var group = [];
    while(arr.length > 0) {
        group.push(arr.slice(0, size));
        arr = arr.slice(size);
    }

    return group;
}

function oneToTwoDimensionSplice(arr, size) {
    var group = [];
    while(arr.length > 0) {
        group.push(arr.splice(0, size));
    }
    return group;
}

console.log(oneToTwoDimensionSplice([1,2,3,4,5], 2));
