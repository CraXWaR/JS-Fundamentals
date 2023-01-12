function solve(input) {
    let racers = {};
    let names = input.shift().split(', ')

    for (const iterator of input) {
        if (iterator !== 'end of race') {
            let racerName = iterator.match(/[A-Z]+/gi).join('');
            let distanceInDigs = iterator.match(/\d/g)
            let distance = 0;
            for (const meter of distanceInDigs) {
                distance += +meter;
            }
            if (names.includes(racerName)) {
                if (racers.hasOwnProperty(racerName)) {
                    racers[racerName] += distance
                } else {
                    racers[racerName] = distance
                }
            }
        }
    }
    let sort = Object.keys(racers).sort((a, b) => racers[b] - racers[a])
    console.log(`1st place: ${sort[0]}\n2nd place: ${sort[1]}\n3rd place: ${sort[2]}`);
}
solve(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])