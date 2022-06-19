function solve(input) {
    let reg = /(=|\/)(?<name>[A-Z][A-Za-z]{2,})\1/gm;
    let destinations = reg.exec(input)

    let sum = 0;
    let holiday = [];

    while (destinations !== null) {
        holiday.push(destinations.groups.name)
        sum += destinations.groups.name.length
        destinations = reg.exec(input)
    }
    console.log(`Destinations: ${holiday.join(", ")}`);
    console.log(`Travel Points: ${sum}`);
}
solve('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')