//Find the longest word in a sentence and display it with its length
function longestWord(str) {
    let longWord = '';
    let wordArray = str.split(' ');
    for (const wrd of wordArray) {
        longWord = longWord.length < wrd.length ? wrd : longWord;
    }

    return (`The longest word is '${longWord}' and it is ${longWord.length} characters long`);
}

console.log(longestWord("I am coding god"))