function palindrome(i, str) {
    if (i > (str.length / 2)) {
        return true;
    }

    if (str.charAt(i) !== str.charAt(str.length - i - 1)) {
        return false;
    }

    return palindrome(i + 1, str);
}

console.log(palindrome(0, 'ABCDCBA'));