function sumDig(n) {
    let sum = 0;
    let numAsString = n.toString()

    for (const char of numAsString) {
        sum += Number(char);
    }
    console.log(sum);
}
sumDig(245678)