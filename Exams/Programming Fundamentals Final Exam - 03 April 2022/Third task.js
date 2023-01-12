function solve(input) {
    let a = input.shift()
    let arr = []
    let heros = {
        spellBook: []
    };

    while (a !== 'End') {
        let tokens = a.split(' ')

        if (tokens[0] === 'Enroll') {
            if (arr.includes(tokens[1])) {
                console.log(`${tokens[1]} is already enrolled.`);
            } else {
                heros[tokens[1]] = { 'spellBook': [] }
                arr.push(tokens[1])
            }
        } else if (tokens[0] === 'Learn') {
            if (Object.keys(heros).includes(tokens[1])) {
                if (heros[tokens[1]].spellBook.includes(tokens[2])) {
                    console.log(`${tokens[1]} has already learnt ${tokens[2]}.`);
                } else {
                    heros[tokens[1]].spellBook.push(tokens[2])
                }
            } else {
                console.log(`${tokens[1]} doesn't exist.`);
            }
        } else if (tokens[0] === 'Unlearn') {
            if (Object.keys(heros).includes(tokens[1])) {
                if (!heros[tokens[1]].spellBook.includes(tokens[2])) {
                    console.log(`${tokens[1]} doesn't know ${tokens[2]}.`);
                } else {
                    let index = heros[tokens[1]].spellBook.indexOf(tokens[2])
                    let book = heros[tokens[1]].spellBook
                    book = book.splice(0, index)
                    heros[tokens[1]].spellBook = book
                }
            } else {
                console.log(`${tokens[1]} doesn't exist.`);
            }
        }
        a = input.shift()
    }
    if (arr.length > 0) {
        console.log('Heroes:');
        for (const iterator of arr) {
            console.log(`== ${iterator}: ${heros[iterator].spellBook.join(', ')}`);
        }
    }
}
solve(["Enroll Stefan",
    "Enroll Peter",
    "Enroll John",
    "Learn Stefan Spell",
    "Learn Stefan Kur",
    "Learn Peter Dispel",
    "End"])