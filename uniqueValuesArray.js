function uniqueValuesArray(arr1, arr2) {
    let result = [...arr1, ...arr2];
    console.log(result);

    return [...new Set(result)];
}

console.log(uniqueValuesArray([1,2,3],[3,4,5]));