function magicSum(arr, n) {
    for (i = 0; i < arr.length; i++) {
        let currEl = arr[i];
        for (j = i + 1; j < arr.length; j++) {
            let nextEl = arr[j];
            let sum = currEl + nextEl;
            if (sum === n) {
                console.log(`${currEl} ${nextEl}`);
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8)