function checkAnagrams(input1, input2) {
    if(input1.split('').sort().join('') === input2.split('').sort().join('')) {
        return true;
    }
    return false;
} 

console.log(checkAnagrams('team', 'mte'))
