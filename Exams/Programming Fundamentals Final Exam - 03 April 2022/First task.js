function solve(input) {
    let str = input.shift()
    let a = input.shift()

    while (a !== 'End') {
        let tokens = a.split(' ')
        if (tokens[0] === 'Translate') {
            while (str.includes(tokens[1])) {
                str = str.replace(tokens[1], tokens[2])
            }
            console.log(str);
        } else if (tokens[0] === 'Includes') {
            if (str.includes(tokens[1])) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (tokens[0] === 'Start') {
            if (str.startsWith(tokens[1])) {
                console.log('True');
            } else {
                console.log('False');
            }
        } else if (tokens[0] === 'Lowercase') {
            str = str.toLowerCase()
            console.log(str);
        } else if (tokens[0] === 'FindIndex') {
            let sum = 0
            for (let index = 0; index < str.length; index++) {
                if (str[index] === tokens[1]) {
                    sum = index
                }
            }
            console.log(sum);
        } else if (tokens[0] === 'Remove') {
            let smth = str.substr(+tokens[1], +tokens[2])
            str = str.replace(smth, '')
            console.log(str);
        }
        a = input.shift()
    }
}
solve(["//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"])