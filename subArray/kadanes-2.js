function printMaxSubArray(nums) {
    let max_sum = nums[0];
    let max_ending = nums[0];
    let start = 0;
    let end = 0;
    let result = [];

    for (let i = 0; i < nums.length; i++) {

        if (max_ending + nums[i] < nums[i]) {
            start = i;
            end = i;
            max_ending = nums[i];
        } else {
            max_ending += nums[i];

            end++;
        }

        max_sum = Math.max(max_sum, max_ending);
    }

    for (let i = start; i <= end; i++) {
        result.push(nums[i]);
    }
    return result;
}

console.log(printMaxSubArray([2, 3, -8, 7, -1, 2, 3]));