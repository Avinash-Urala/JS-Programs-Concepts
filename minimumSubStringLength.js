// Minimum length after removing first and last letters if equal
// ex: "cab"  return 3 as first and last are not equal so length is 3
// ex: "cbaabc" return 0 and also "cbaabccc" should return 0
// two pointer approach


function minimumLengthString(str) {
  let start = 0;
  let end = str.length - 1;
  
  while(start < end && str[start] === str[end]) {
    let char = str[start];
    
    while(start <= end && str[start] === char) {
      start++
    }
    
    while(start <= end && str[end] === char) {
      end--;
    }
  }
  
  return end - start + 1; 
}


console.log(minimumLengthString('aabcababaaa'));
