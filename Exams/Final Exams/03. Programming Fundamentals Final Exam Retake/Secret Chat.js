function secretChat(input) {
    let message = input.shift();

    while (input[0] !== 'Reveal') {
        let data = input.shift();
        if (data.includes('InsertSpace')) {
            let [command, index] = data.split(':|:');
            index = Number(index);
            message = message.split('');
            message.splice(index, 0, ' ');
            message = message.join('');
        } else if (data.includes('Reverse')) {
            let [command, substring] = data.split(':|:');
            if (!message.includes(substring)) {
                console.log('error');
                continue;
            } else {
                let reversed = substring
                    .split('')
                    .reverse()
                    .join('');

                let indexOfSubstring = message.indexOf(substring);
                message = message.split('');
                message.splice(indexOfSubstring, substring.length);
                message = message.join('') + reversed;
            }
        } else if (data.includes('ChangeAll')) {
            let [command, substring, replacement] = data.split(':|:');
            while (message.includes(substring)) {
                message = message.replace(substring, replacement);
            }
        }
        console.log(message);
    }
    console.log(`You have a new text message: ${message}`);
}
solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])