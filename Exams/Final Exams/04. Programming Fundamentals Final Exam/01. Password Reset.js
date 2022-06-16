function solve(input) {
    let pass = input.shift()
    let next = input.shift()

    while (next !== 'Done') {
        let tokens = next.split(' ')
        let command = tokens[0];
        if (command === 'TakeOdd') {
            let a = [];
            for (let i = 0; i < pass.length; i++) {
                if (i % 2 !== 0) {
                    a.push(pass[i])
                }
            }
            pass = a.join('')
            console.log(pass);
        } else if (command === 'Cut') {
            let index = +tokens[1];
            let length = +tokens[2];
            let tempPass = pass.substring(index, index + length);
            pass = pass.replace(tempPass, '')
            console.log(pass);
        } else if (command === 'Substitute') {
            if (pass.includes(tokens[1])) {
                let sub = tokens[1];
                let substi = tokens[2]
                while (pass.includes(sub)) {
                    pass = pass.replace(sub, substi)
                }
                console.log(pass);
            } else {
                console.log("Nothing to replace!");
            }
        }
        next = input.shift()
    }
    console.log(`Your password is: ${pass}`);
}
solve(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"])