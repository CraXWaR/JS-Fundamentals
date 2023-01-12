function solve(adress) {
    let address = {}

    for (const iterator of adress) {
        let tokens = iterator.split(':')
        address[tokens[0]] = tokens[1]
    }
    //sort
    let keys = Object.keys(address),
        i, len = keys.length;
    keys.sort();
    //print 

    for (i = 0; i < len; i++) {
        k = keys[i];
        console.log(k + ' -> ' + address[k]);
    }
}
solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])