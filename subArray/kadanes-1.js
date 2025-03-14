function maxSubArraySum(nums) {
    let max_sum = nums[0];
    let max_ending = nums[0];

    if (nums.length === 1) {
        return max_sum;
    }

    for (let i = 1; i < nums.length; i++) {
        max_ending = Math.max(max_ending + nums[i], nums[i]);
        max_sum = Math.max(max_ending, max_sum);
    }

    return max_sum;
}

console.log(maxSubArraySum([5, 4, -1, 7, 8]));