/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {

    for(let word of words) {
      if(checkPalindrome(word)) {
          return word;
      }
    }  
  
    return '';
  };
  
  function checkPalindrome(word) {
      const arr = word.split('');
      for(let i = 0; i <= arr.length/2; i++) {
          if(arr[i] !== arr[arr.length - i - 1]) {
              return false;
          }
      }
      return true;
  }

  console.log(firstPalindrome(["def","ghi"]));