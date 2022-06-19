function solve(text, word) {
    word = ` ${word} `
    text = ` ${text} `
    let count = 0;
    let index = 0

    while (text.indexOf(word, index) != -1) {
        count++
        index = text.indexOf(word, index) + 1;
    }
    console.log(count);
}
solve('This is a word and it also is a sentence',
'is'
)
// let solve = (text, word) => text.split(' ').filter(x => x == word).length;