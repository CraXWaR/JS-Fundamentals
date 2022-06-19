function solve(input) {
    let unique = '';

    for (let index = 0; index < input.length; index++) {
        let currChar = input.charAt(index)
        let nextChar = input.charAt(index + 1)
        if (currChar !== nextChar) {
            unique += currChar
        }
    }
    console.log(unique);
}
solve('aaaaabbbbbcdddeeeedssaa')