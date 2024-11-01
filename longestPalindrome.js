/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let arr = s.split('');
    let wordsCount = {};
    let result = 0;
    let oddFreq = false;

    if(arr.length === 1) {
        return 1;
    }

    for(let i = 0; i < arr.length; i++) {
        wordsCount[arr[i]] = (wordsCount[arr[i]] || 0) + 1;
    }

    for(let word in wordsCount) {
        if(wordsCount[word] % 2 === 0) {
            result += wordsCount[word];
        } else {
            result += wordsCount[word] - 1;
            oddFreq = true;
        }
    }
    if(oddFreq) {
        result += 1;
    }
    return  result;
};

console.log(longestPalindrome('abcccdd'));