//Reverse a given String using string and array methods
let reverseString = word => {
    let reversedString = word.split('').reverse().join('');
    return reversedString;

}

console.log(reverseString('word'));

// Reverse a given String using a for loop
let reverseString2 = word => {
    let reversedWord = '';
    for (i = word.length - 1; i >= 0; i--)
        reversedWord += word[i];
    return reversedWord;

}

console.log(reverseString2('Hakki'))