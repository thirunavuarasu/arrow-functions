const filterPalindromes = arr => {
    const palindromes = arr.filter(str => str === str.split('').reverse().join(''));
    console.log(palindromes);
};
filterPalindromes(['madam', 'hello', 'racecar', 'world']);
