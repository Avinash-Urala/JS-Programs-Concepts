function intersectionArrays(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            result.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return result;
}

console.log(intersectionArrays([1, 2, 3, 4, 5], [2, 2, 3, 4, 4, 5]));