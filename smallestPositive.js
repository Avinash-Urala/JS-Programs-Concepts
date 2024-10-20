function solution(A) {
    // Implement your solution here
    sInteger = 1;

    for(let i = 1; i <= A.length; i++) {
        if(A.indexOf(i) !== -1) {
            sInteger++;
        }
        else {
            return sInteger;
        }
    }

    return sInteger;
}

console.log(solution([1,2,3]));