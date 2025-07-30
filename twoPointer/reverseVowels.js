// Reverse all vowels in a string
// Use Set instead of array.includes() as it internally implements linear search
// Go with two pointer approach for time as well as space complexity


function reverseVowels(str) {
  let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let vowelStr = [];
  let res = str.split('');
  
  for(let i = 0; i < res.length; i++) {
    if(vowels.has(res[i].toLowerCase())) {
      vowelStr.push(res[i]);
    }
  }
  
  for(let i = 0; i < res.length; i++) {
    if(vowels.has(res[i].toLowerCase())){
      let letter = vowelStr.pop();
      res[i] = letter;
    }
  }
  
  return res.join('');
}


console.log(reverseVowelsTwo('frOntend engineering'));


function reverseVowelsTwo(str) {
  let left = 0;
  let chars = str.split('');
  let right = str.length - 1;
  let vowels = new Set(['a','e','i','o','u']);
  
  while(left < right) {
    while(left < right && !vowels.has(chars[left].toLowerCase())) {
      left++;
    }
    while(left < right && !vowels.has(chars[right].toLowerCase())) {
      right--;
    }
    
    if(left < right) {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left++;
      right--;
    }
  }
  
  return chars.join('');
}


