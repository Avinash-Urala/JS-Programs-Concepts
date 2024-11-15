function getPermutations(str) {
    const results = [];

    // Helper function to generate permutations
    function permute(current, remaining) {
        if (remaining.length === 0) {
            results.push(current);
        } else {
            for (let i = 0; i < remaining.length; i++) {
                // Choose the next character
                const next = remaining[i];
                // console.log(remaining.slice(0, i));
                const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
                // console.log(newRemaining);
                // Recur with the new parameters
                permute(current + next, newRemaining);
                console.log('iteration' + i);
            }
        }
    }

    permute('', str.split(''));
    return results;
}

// Call the function and log the permutations
const permutations = getPermutations('ABC');
console.log(permutations);


/**
permute('', ['A', 'B', 'C'])
    ├─ permute('A', ['B', 'C'])
    │   ├─ permute('AB', ['C'])
    │   │   └─ permute('ABC', [])
    │   └─ permute('AC', ['B'])
    │       └─ permute('ACB', [])
    ├─ permute('B', ['A', 'C'])
    │   ├─ permute('BA', ['C'])
    │   │   └─ permute('BAC', [])
    │   └─ permute('BC', ['A'])
    │       └─ permute('BCA', [])
    └─ permute('C', ['A', 'B'])
        ├─ permute('CA', ['B'])
        │   └─ permute('CAB', [])
        └─ permute('CB', ['A'])
            └─ permute('CBA', [])
 */
