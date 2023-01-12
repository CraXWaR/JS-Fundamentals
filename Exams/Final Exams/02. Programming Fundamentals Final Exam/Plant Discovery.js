function solve(input) {
    let n = +input.shift()
    let obj = {}
    for (let index = 0; index < n; index++) {
        let tokens = input.shift().split("<->")
        let vase = tokens[0]
        let rarity = tokens[1]
        let rating = [];
        obj[vase] = {
            rarity,
            rating
        }
    }
    while (input[0] !== "Exhibition") {
        let line = input.shift();
        let tokens = line.split(':');
        let command = tokens[0];
        let flowers = tokens[1].trim().split(' - ');

        if (command === "Rate") {
            if (flowers[0] in obj) {
                obj[flowers[0]].rating.push(+flowers[1]);
            } else {
                console.log("error");
            }
        } else if (command === "Update") {
            if (flowers[0] in obj) {
                obj[flowers[0]].rarity = +flowers[1];
            } else {
                console.log("error");
            }
        } else if (command === "Reset") {
            if (flowers[0] in obj) {
                obj[flowers[0]].rating = []
            } else {
                console.log("error");
            }
        }
    }
    console.log('Plants for the exhibition:');
    for (const [flower, keys] of Object.entries(obj)) {
        let avgRating = 0;
        if (keys.rating.length > 0) {
            for (const iterator of keys.rating) {
                avgRating += iterator
            }
            avgRating /= keys.rating.length
        }
        console.log(`- ${flower}; Rarity: ${keys.rarity}; Rating: ${avgRating.toFixed(2)}`);
    }
}
solve(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])