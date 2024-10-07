function characterCount(input) {
  const charCount = {};
  const charArray = input.split("");

  for (let char of charArray) {
    if (char !== " ") {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }
  let stringFormat = "";
  for (let char in charCount) {
    stringFormat += char + charCount[char];
  }
  return stringFormat;
}

function charCountReduce(input) {
  const charArray = input.split("");
  const result = charArray.reduce((acc, el) => {
    if (el !== " ") {
      acc[el] = acc[el] ? acc[el] + 1 : 1;
    }
    return acc;
  }, {});

  return result;
}

console.log(charCountReduce("this is javascript"));
