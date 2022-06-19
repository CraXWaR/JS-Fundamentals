function solve(input) {
    let words = [];
    let currWord = input[0];

    for (let index = 1; index < input.length; index++) {
        if (input[index].toUpperCase() !== input[index]) {
            currWord = currWord.concat(input[index]);
        }else{
            words.push(currWord)
            currWord = input[index]
        }
    }
    words.push(currWord)
    console.log(words.join(', '));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')