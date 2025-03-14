function getPermutations(str) {
    let permutations = [];

    if (str.length === 1) {
        return [str];
    }

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let remaingChars = str.slice(0, i) + str.slice(i + 1);
        let subPermutations = getPermutations(remaingChars);

        for (let perm of subPermutations) {
            permutations.push(char + perm);
        }
    }

    return permutations;
}

console.log(getPermutations('abcd'));