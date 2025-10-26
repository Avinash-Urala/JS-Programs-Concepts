// Square root of x using without using Math.sqrt(x)
// Use Binary Search

function squareRoot(x) {
  let l = 1;
  let r = Math.floor(x/2);
  
  while(l <= r) {
    let mid = Math.floor((l + r) / 2);
    let sq = mid * mid;
    
    if(sq === x) {
      return mid;
    }
    if(sq < x) {
      l = mid + 1;
    }
    if(sq > x) {
      r = mid - 1;
    }
  }
  
  return ans;
}


console.log(squareRoot(144));
