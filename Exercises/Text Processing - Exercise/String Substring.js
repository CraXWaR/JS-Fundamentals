function solve(searchedWord, sentence) {
    let words = sentence.split(' ')

    for (const word of words) {
        if (searchedWord.toLowerCase() === word.toLowerCase()) {
            console.log(searchedWord);
            return;
        }
    }
    console.log(`${searchedWord} not found!`);
}
solve('javascript',
    'JavaScript is the best programming language')