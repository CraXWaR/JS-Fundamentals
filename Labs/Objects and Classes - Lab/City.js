function city(input) {
    let props = Object.keys(input);

    for (const iterator of props) {
        console.log(`${iterator} -> ${input[iterator]}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})