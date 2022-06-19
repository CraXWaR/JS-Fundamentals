function processOddNumbs(arr) {
    let filter = arr.filter((x, i) => i % 2 == 1);

    let doubled = filter.map(x => x * 2);

    let result = doubled.reverse();

    console.log(result.join(' '));
}
processOddNumbs([10, 15, 20, 25])