//Reverse a given String
let reverseString = word => {
    let reversedString = word.split('');
    return reversedString.reverse();

}

console.log(reverseString('word'));