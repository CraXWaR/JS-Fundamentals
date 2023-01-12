function solve(grades) {
    let book = {}
    let totalSum = {};

    for (const iterator of grades) {
        let tokens = iterator.split(' ')
        let name = tokens.shift()

        if (name in book) {
            let newArr = book[name].concat(tokens)
            book[name] = newArr
        } else {
            book[name] = tokens
        }
    }
    let keys = Object.keys(book);

    for (const key of keys) {
        let score = book[key]
        let div = score.length
        totalSum[key] = 0
        for (const iterator of score) {
            totalSum[key] += Number(iterator)
        }
        totalSum[key] /= div
    }
    len = keys.length;
    keys.sort();
    //print 
    for (i = 0; i < len; i++) {
        k = keys[i];
        console.log(`${k}: ${totalSum[k].toFixed(2)}`);
    }
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])