/** Sort the array in descending order */
function largestPairSum(arr) {
    const numbers = arr.sort((a,b) => b - a );
    console.log(numbers);
    return numbers[0] + numbers[1];
}

console.log(largestPairSum([3,-1,7,2,1,5,9]))