function reverseArray(arr) {
    let i = 0;
    let j = arr.length - 1;

    while (i < arr.length && j > 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }

    return arr;
}

// console.log(reverseArrayRecursive([1, 2, 3, 4, 5], 0, 4));

function reverseArrayRecursive(arr, start, end) {
    if (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        reverseArrayRecursive(arr, start + 1, end - 1);
    }
}

function main() {
    let arr = [1, 2, 3, 4, 5];
    let n = arr.length;
    reverseArrayRecursive(arr, 0, n - 1);
    console.log(arr);
}

main();