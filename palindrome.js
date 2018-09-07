//Checking for whether a given string is a Palindrome
function isPalindrome(str) {
    let forwrdStr = str.toLowerCase().replace(/[\W_]/g, '');
    let reverseStr = forwrdStr.split('').reverse().join('');
    return forwrdStr === reverseStr

}



console.log(isPalindrome("A man, a plan, a canal. Panama"));
console.log(isPalindrome("My age is 0, 0 si ega ym."));
console.log(isPalindrome("_codgod"));
console.log(isPalindrome("legandary"));
console.log(isPalindrome(".0_0 (: /-\ :) 0-0"));