function spaceTravel(input) {
    let travelRoute = input.shift().split("||")
    let fuel = Number(input[0])
    let ammo = Number(input[1])

    for (let index = 0; index < travelRoute.length; index++) {
        let tokens = travelRoute[index]
        tokens = tokens.split(' ')
        if (tokens[0] === 'Travel') {
            if (fuel >= tokens[1]) {
                console.log(`The spaceship travelled ${tokens[1]} light-years.`)
                fuel -= tokens[1];
            }
            else {
                console.log(`Mission failed.`)
                break;
            }
        } else if (tokens[0] === 'Enemy') {
            if (ammo >= Number(tokens[1])) {
                ammo -= Number(tokens[1])
                console.log(`An enemy with ${Number(tokens[1])} armour is defeated.`);
            } else if (ammo < Number(tokens[1])) {
                fuel -= 2 * Number(tokens[1]);

                if (fuel <= 0 || fuel <= Number(tokens[1])) {
                    console.log("Mission failed.");
                    break;
                } else {
                    console.log(`An enemy with ${Number(tokens[1])} armour is outmaneuvered.`);
                }
            }
        } else if (tokens[0] === 'Repair') {
            ammo += Number(tokens[1]) * 2
            console.log(`Ammunitions added: ${Number(tokens[1] * 2)}.`);
            fuel += Number(tokens[1]);
            console.log(`Fuel added: ${Number(tokens[1])}.`);
        } else if (tokens[0] === 'Titan') {
            console.log("You have reached Titan, all passengers are safe.");
            break;
        }
    }
}
spaceTravel(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
    '60',
    '100'])