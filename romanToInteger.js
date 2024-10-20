var romanToInt = function (s) {
  let result = 0;
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    let curr = romanValues[s[i]];
    let next = romanValues[s[i + 1]];

    if (curr < next) {
        result = result + (next - curr);
        i++;
    } else {
      result = result + curr;
    }
  }

  return result;
};

console.log(romanToInt("IX"));
