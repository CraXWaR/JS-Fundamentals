function solve(input) {
    let destination = input.shift()
    let commands = input.shift().split(':')
    while (commands[0] !== "Travel") {
        if (commands[0] === 'Add Stop') {
            if (+commands[1] >= 0 && +commands[1] <= destination.length - 1) {
                destination = destination.slice(0, +commands[1]) + commands[2] + destination.slice(commands[1])
                console.log(destination);
            } else {
                console.log(destination);
            }
        } else if (commands[0] === 'Remove Stop') {
            if (+commands[1] >= 0 && +commands[1] <= destination.length - 1 && +commands[2] >= 0 && +commands[2] <= destination.length - 1) {
                destination = destination.slice(0, +commands[1]) + destination.slice(+commands[2] + 1)
                console.log(destination);
            } else {
                console.log(destination);
            }
        } else if (commands[0] === 'Switch') {
            if (destination.includes(commands[1])) {
                destination = destination.replace(commands[1], commands[2])
                console.log(destination);
            } else {
                console.log(destination);
            }
        }
        commands = input.shift().split(':')
    }
    console.log(`Ready for world tour! Planned stops: ${destination}`);
}
solve(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])
