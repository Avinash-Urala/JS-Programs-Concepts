// Product Array except self

function productArray(arr) {
  let result = [];
  let left = [];
  let right = [];
  let n = arr.length;
  
  left[0] = 1;
  for(let i = 1; i < arr.length; i++) {
    left[i] = left[i - 1] * arr[i - 1];
  }
  
  right[n - 1] = 1;
  for(let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * arr[i + 1];
  }
  
  for(let i = 0; i < n; i++) {
    result[i] = left[i] * right[i];
  }
  
  return result;
}

console.log(productArray([1,2,3,4]));
// -------------------------------------------------------------------
// Flatten array program

function flattenArray(arr) {
  let result = [];
  
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  
  return result;
}

console.log(flattenArray([1,2,3,[4,5,[6,[7]]]]))


// -----------------------------------------------------------------
// Max sub array sum (Kadane's Algorithm)

function maxSubArraySum(arr) {
  
  let currentSum = arr[0];
  let maxSum = arr[0];
  
  for(let i = 0; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
}

console.log(maxSubArraySum([-2,1,-3,4,-1,2,1,-5,4]));

// ------------------------------------------------------------------
// Contains duplicate

function containsDuplicate(arr) {
  let map = {};
  
  for(let i = 0; i < arr.length; i++) {
    if(map[arr[i]]) {
      return true;
    }
    map[arr[i]] = 1
  }
  
  return false;
}

console.log(containsDuplicate([1,2,3,4]));

// ------------------------------------------------------------------
// Maxx product sub array

function maxProductSubArray(arr) {
 // minSFar maxSoFar and result
  let minSoFar = arr[0];
  let maxSoFar = arr[0];
  let result = arr[0];

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < 0) {
      [minSoFar, maxSoFar] = [maxSoFar, minSoFar];
    }
    
    maxSoFar = Math.max(arr[i], arr[i] * maxSoFar);
    minSoFar = Math.min(arr[i], arr[i] * minSoFar);
    
    result = Math.max(result, maxSoFar);
  }
  
  return result;
}


// Example
// console.log(maxProduct([2,3,-2,4])); // 6

console.log(maxProductSubArray([2,3,-2,4]))

// --------------------------------------------------------------------
// Validate Anagrams
function validateAnagrams(s, t) {
  
  if(s.length !== t.length) {
    return false;
  }
  const map = {};
  
  for(let char of s) {
    map[char] = (map[char] || 0) + 1;
  }
  
  for(let char of t) {
    if(!map[char]) return false;
    
    map[char]--;
  }
  
  return true;
}

console.log(validateAnagrams('silent','listenn'));

// --------------------------------------------------------------------
// Group Anagrams

function groupAnagrams(strs) {
  
  const map = {};
  
  for(let word of strs) {
    const key = word.split('').sort().join('');
    
    if(!map[key]) {
      map[key] = [];
    }
    
    map[key].push(word);
  }
  
  return Object.values(map);
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
