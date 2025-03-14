function maxProductSubArray(nums) {
    let prefix = 1;
    let suffix = 1;
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        result.push(prefix);
        prefix *= nums[i];

    }

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    console.log(result);
}

maxProductSubArray([1, 2, 3, 4]);