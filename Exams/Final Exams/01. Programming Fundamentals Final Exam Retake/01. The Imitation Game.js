function solve(input) {
    let msg = input.shift()
    let command = input.shift();
    while (command !== 'Decode') {
        let currLine = command.split('|')
        let currCommand = currLine[0]
        let randomIndex = currLine[1]
        let randomSecondIndex = currLine[2]
        if (currCommand === 'ChangeAll') {
            while (msg.includes(randomIndex)) {
                msg = msg.replace(randomIndex, randomSecondIndex)
            }
        }
        if (currCommand === 'Insert') {
            msg = msg.split('')
            msg.splice(randomIndex, 0, randomSecondIndex)
            msg = msg.join('')
        }
        if (currCommand === 'Move') {
            let letters = msg.substring(0, randomIndex)
            msg = msg.replace(letters, '')
            msg += letters
        }
        command = input.shift();
    }
    console.log(`The decrypted message is: ${msg}`);
}
solve([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
])