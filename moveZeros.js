function moveZeroes(arr) {
   
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
    //   console.log(arr);
      arr.push(0);
    }
  }

  return arr;
}

console.log(moveZeroes([1, 0, 2, 0, 3, 0, 45, 6]));
