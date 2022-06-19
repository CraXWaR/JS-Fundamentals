function negativeOrPossitive(arr) {
    let newArr = [];

    for (const iterator of arr) {
        if (iterator < 0) {
            newArr.unshift(iterator)
        }else{
            newArr.push(iterator)
        }
    }
    for (let element of newArr) {
        console.log(element);
    }
    // console.log(newArr.join('\n'));
}
negativeOrPossitive(['7', '-2', '8', '9'])