function sort(arr) {
    let sorted = arr.sort((a, b) => b - a);
    let result = [];

    if ((sorted.length / 2) % 2 == 0) {
        for (let i = 0; i < sorted.length / 2; i++) {
            result.push(sorted[i], sorted[sorted.length - 1 - i])
        }
        console.log(result.join(' '));
    } else {
        for (let i = 0; i < sorted.length / 2; i++) {
            if (i == (sorted.length / 2) - 0.5) {
                result.push(sorted[i])
            } else {
                result.push(sorted[i], sorted[sorted.length - 1 - i])
            }
        }
        console.log(result.join(' '));
    }
}
sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])