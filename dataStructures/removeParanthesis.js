
// Remove outermost paranthesis

function removeOuterParanthesis(str) {
  let stack = [];
  let result = '';
  
  for(let char of str) {
    if(char === '(') {
      if(stack.length > 0) {
      result += char;
    }
      stack.push(char)
    } else if(char === ')') {
      stack.pop();
      
      if(stack.length > 0) {
        result += char
      }
    }
  }
  
  return result;
}


console.log(removeOuterParanthesis('(()()())((()))'))
