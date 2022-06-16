function matrix(n) {
    let arr = [];

    for (let index = 0; index < n; index++) {
        arr.push([]);
        for (let j = 0; j < n; j++) {
            arr[index][j] = n;
        }
    }
    for (let iterator of arr) {
        console.log(iterator.join(' '));
    }
}
matrix(3)