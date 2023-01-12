function angryCat(array, cat, price) {
    let sumL = 0;
    let sumR = 0;
    let el = array[cat]
    for (let index = 0; index < cat; index++) {
        if (price === 'cheap') {
            if (array[index] < el) {
                sumL += array[index]
            }
        } else {
            if (array[index] >= el) {
                sumL += array[index]
            }
        }
    }
    for (let index = cat + 1; index < array.length; index++) {
        if (price === 'cheap') {
            if (array[index] < el) {
                sumR += array[index]
            }
        } else {
            if (array[index] >= el) {
                sumR += array[index]
            }
        }
    }
    if (sumL === sumR) {
        console.log(`Left - ${sumL}`);
    } else if (sumL > sumR) {
        console.log(`Left - ${sumL}`);
    } else {
        console.log(`Right - ${sumR}`);
    }
}
angryCat([1, 5, 1],
    1,
    "cheap")