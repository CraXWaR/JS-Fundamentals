function arrRot(arr, n) {
    for (let i = 0; i < n; i++) {
        let currNum = arr.shift();
        arr.push(currNum);
    }
    console.log(arr.join(" "));
}
arrRot([51, 47, 32, 61, 21], 2)