function validParanthesis(str) {
  const map = {
    ')' : '(',
    ']' : '[',
    '}' : '{}'
  }
  let stack = [];
  
  for(let i = 0; i < str.length; i++) {
    if(str[i] === '(' || str[i] === '[' || str[i] === '{') {
      stack.push(str[i]);
    } else if(stack.pop() !== map[str[i]]) {
      return false;
    }
  }
  
  return true;
}


console.log(validParanthesis('())'));
