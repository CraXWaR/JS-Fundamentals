function solve(input) {
    let n = Number(input.shift())
    let obj = {};

    for (let index = 0; index < n; index++) {
        let tokens = input.shift().split("|")
        let piece = tokens[0]
        let composer = tokens[1]
        let key = tokens[2]

        obj[piece] = {
            composer,
            key
        }
    }
    
    while (input[0] !== 'Stop') {
        let line = input.shift();
        let tokens = line.split('|');
        let command = tokens[0]

        if (command === 'Add') {
            if (obj.hasOwnProperty(tokens[1])) {
                console.log(`${tokens[1]} is already in the collection!`);
            } else {
                obj[tokens[1]] = {}
                obj[tokens[1]].composer = tokens[2]
                obj[tokens[1]].key = tokens[3]
                console.log(`${tokens[1]} by ${tokens[2]} in ${tokens[3]} added to the collection!`)

            }
        } else if (command === 'Remove') {
            if (obj.hasOwnProperty(tokens[1])) {
                delete obj[tokens[1]]
                console.log(`Successfully removed ${tokens[1]}!`)
            } else {
                console.log(`Invalid operation! ${tokens[1]} does not exist in the collection.`)
            }
        } else if (command === 'ChangeKey') {

            if (obj.hasOwnProperty(tokens[1])) {
                obj[tokens[1]].key = tokens[2]
                console.log(`Changed the key of ${tokens[1]} to ${tokens[2]}!`);
            } else {
                console.log(`Invalid operation! ${tokens[1]} does not exist in the collection.`);
            }
        }
    }

    for (const [name, keys] of Object.entries(obj)) {
        console.log(`${name} -> Composer: ${keys.composer}, Key: ${keys.key}`);
    }
}
solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])