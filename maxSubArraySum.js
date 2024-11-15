/** Kadane's Algorithm */

function mxSubArraySum(arr) {
    let result = arr[0];
    let maxEnding = arr[0];

    for(let i = 0; i < arr.length; i++) {
        maxEnding = Math.max(maxEnding + arr[i], arr[i]);
        result = Math.max(maxEnding, result);
    }

    return result;
}

console.log(mxSubArraySum([2, 3, -8, 7, -1, 2, 3]));