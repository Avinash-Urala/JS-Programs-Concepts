const mergeSortedArrays = (numbers1, numbers2) => {
    let result = [];
    let i = 0;
    let j = 0;

    while(i < numbers1.length && j < numbers2.length) {
        if(numbers1[i] < numbers2[j]) {
            result.push(numbers1[i]);
            i++
        } else {
            result.push(numbers2[j]);
            j++
        }
    }

    while (i < numbers1.length) {
        result.push(numbers1[i]);
        i++;
    }

    while (j < numbers2.length) {
        result.push(numbers2[j]);
        j++;
    }
    return result;
}

console.log(mergeSortedArrays([1,2,3,4],[3,4,5,6,9,12]));