function equalArr(arr1, arr2) {
    let arEqual = true;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            arEqual = false;
            break;
        }
    }
    if (arEqual === true) {
        let sum = 0;
        for (let i = 0; i < arr1.length; i++) {
            sum += Number(arr1[i])
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equalArr(['10', '20', '30'], ['10', '20', '30'])


