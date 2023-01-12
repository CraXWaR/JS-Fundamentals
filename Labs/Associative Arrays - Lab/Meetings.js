function solve(meet) {
    let meetings = {}

    for (const iterator of meet) {
        let tokens = iterator.split(' ');

        if (tokens[0] in meetings) {
            console.log(`Conflict on ${tokens[0]}!`);
        } else {
            console.log(`Scheduled for ${tokens[0]}`);
            meetings[tokens[0]] = tokens[1]
        }
    }

    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}
solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])