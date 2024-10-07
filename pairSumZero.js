function findFirstSumZero(arr) {
    const result = []
    for(let i = 0; i < arr.length; i++) {
        for(let j = 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                result.push([arr[i], arr[j]]);
            }
        }
    }

    return result;
}

// Better approach - using two pointers
// First Sort the array
function getFirstSumZero(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        const sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        }
        else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }

}

console.log(getFirstSumZero([-5,-4,-3,-2,-1,0,2,4,6,8]))