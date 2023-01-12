function maxNum(arr) {
    let topNum = [];
    for (let i = 0; i < arr.length; i++) {
        let curEl = arr[i];
        let isTop = true;
        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = arr[j];
            if (curEl <= nextEl) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            topNum.push(curEl)
        }
    }
    console.log(topNum.join(' '));
}
maxNum([1, 4, 3, 2])