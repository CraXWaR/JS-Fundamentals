function solve(input) {
    let result = {};

    for (const iterator of input) {

        if (iterator in result) {
            result[iterator] += 1
        } else {
            result[iterator] = 1
        }
    }
    let arr = [];
    for (const iterator in result) {
        arr.push([iterator, result[iterator]])
    }
    arr.sort(function (a, b) {
        return b[1] - a[1]
    })
    for (const a in arr) {
        console.log(`${arr[a][0]} -> ${arr[a][1]} times`);
    }
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])