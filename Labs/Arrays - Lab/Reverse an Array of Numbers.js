function revAr(n, arr) {
    let newArr = [];

    for (let i = 0; i < n; i++) {
        newArr.push(arr[i])
    }

    let result = '';

    for (let i = newArr.length - 1; i >= 0; i--) {
        result += newArr[i];
        result += ' ';
    }
    console.log(result);
}
revAr(3, [10, 20, 30, 40, 50])