function sortStrings(array) {
    return array.sort((a,b) => a.localeCompare(b));
}

function sortStringsQuick(array) {
    if(array.length <= 1) {
        return array;
    }
    let pivot = array[array.length - 1];
    let left = [];
    let right = [];

    for(let i = 0; i < array.length - 1; i++) {
        if(array[i].localeCompare(pivot) > 0) {
            left.push(array[i])
        } else {
            right.push(array[i]);
        }
    }

    return [...sortStringsQuick(left), pivot, ...sortStringsQuick(right)];

}

console.log(sortStringsQuick(["banana", "apple", "cherry", "date"]))