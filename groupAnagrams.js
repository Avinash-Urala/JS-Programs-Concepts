function groupAnagrams(words) {
    const anagrams = {};
    for(let word of words) {
        const str = word.split('').sort().join('');
        if(anagrams[str]) {
            anagrams[str].push(word);
        } else {
            anagrams[str] = [word]
        }
    }

    return Object.values(anagrams);
}

console.log(groupAnagrams(['team', 'mate', 'eat', 'ate', 'ant', 'tan']))