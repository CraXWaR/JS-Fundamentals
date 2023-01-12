function blackFlag(input) {
    let days = Number(input[0]);
    let daily = Number(input[1]);
    let expect = Number(input[2]);
    let sum = 0
    for (let index = 1; index <= days; index++) {
        if (index % 3 !== 0) {
            sum += daily
        } else {
            sum += daily + (daily * 0.5)
        }
        if (index % 5 === 0) {
            sum -= sum * 0.3
        }
    }
    let percentage = (sum / expect) * 100
    if (sum >= expect) {
        console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["5",
    "40",
    "100"])
