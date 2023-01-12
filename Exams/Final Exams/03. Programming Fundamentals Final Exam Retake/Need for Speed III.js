function solve(input) {
    let n = +input.shift();
    let yard = {};
    for (let i = 0; i < n; i++) {
        let [model, mileage, fuel] = input.shift().split(`|`);
        mileage = +mileage;
        fuel = +fuel;

        yard[model] = {
            mileage,
            fuel
        };
    }
    while (input[0] !== "Stop") {
        let tokens = input.shift().split(` : `);
        let [command, car] = tokens;

        if (command == "Drive") {
            let distance = +tokens[2];
            let fuel = +tokens[3];

            yard[car].fuel -= fuel;

            if (yard[car].fuel < 0) {
                yard[car].fuel += fuel;

                console.log("Not enough fuel to make that ride");
            } else {
                yard[car].mileage += distance;

                console.log(
                    `${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
                );
            }
            if (yard[car].mileage >= 100000) {
                delete yard[car];

                console.log(`Time to sell the ${car}!`);
            }
        }
        if (command == "Refuel") {
            let refuel = +tokens[2];

            let currFuel = Math.min(75 - yard[car].fuel, refuel);
            yard[car].fuel += currFuel;

            console.log(`${car} refueled with ${currFuel} liters`);
        }
        if (command == "Revert") {
            let amountReverted = +tokens[2];
            yard[car].mileage -= amountReverted;

            if (yard[car].mileage < 10000) {
                yard[car].mileage = 10000;
            } else {
                console.log(`${car} mileage decreased by ${amountReverted} kilometers`);
            }
        }
    }

    for (const currCar in yard) {
        console.log(`${currCar} -> Mileage: ${yard[currCar].mileage} kms, Fuel in the tank: ${yard[currCar].fuel} lt.`);
    }
}
solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])