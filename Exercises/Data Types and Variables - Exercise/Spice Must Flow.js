function spice(n) {
    let spiceExtracter = 0;
    let dayCounter = 0;

    while (n >= 100) {
        dayCounter++;
        spiceExtracter += n - 26;
        n -= 10;
    }
    console.log(dayCounter);

    if (dayCounter != 0) {
        console.log(spiceExtracter - 26);
    } else {
        console.log(spiceExtracter);
    }
}
spice(450)