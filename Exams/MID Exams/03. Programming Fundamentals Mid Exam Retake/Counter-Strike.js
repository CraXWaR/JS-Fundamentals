function csGo(input) {
    let energy = input.shift()
    let count = 0;

    for (let index = 0; index < input.length; index++) {

        if (input[index] === 'End of battle') {
            console.log(`Won battles: ${count}. Energy left: ${energy}`);
            break;
        }

        let el = Number(input[index]);

        if (energy >= el) {
            energy -= el;
            count++
            if (count % 3 == 0) {
                energy += count
            }
        } else {
            console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
            break;
        }
    }
}
csGo(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])
// csGo(["200",
// "54",
// "14",
// "28",
// "13",
// "End of battle"])
