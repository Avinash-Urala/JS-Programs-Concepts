Prefix Product: Traverse the array from left to right and store the cumulative product (product of all the elements to the left of the current element) in a result array.

Suffix Product: Traverse the array from right to left and multiply the result array by the cumulative product (product of all the elements to the right of the current element).

  function productArray(nums) {
  let n = nums.length;
  let result = new Array(n).fill(1);
  
  let prefix = 1;
  
  for(let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  
  let suffix = 1;
  for(let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  } 
  
  console.log(result);
}
