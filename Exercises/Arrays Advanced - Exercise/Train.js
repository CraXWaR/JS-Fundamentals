function train(input) {
    let wagons = input.shift().split(' ').map(Number);
    let maxPassangerCapacity = input.shift().split(' ').map(Number);

    for (let i = 0; i < input.length; i++) {
        let current = input[i].split(' ');
        if (current.includes("Add")) {
            wagons.push(Number(current[1]));
        } else {
            let currentNum = Number(current);
            for (let j = 0; j < wagons.length; j++) {
                if (currentNum + wagons[j] <= maxPassangerCapacity) {
                    wagons[j] += currentNum;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)