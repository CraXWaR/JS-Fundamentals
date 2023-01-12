function solve(input) {
    let n = input.shift();
    let reg = /@#+(?<products>[A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;

    while (n > 0) {
        let item = input.shift()
        let valid = reg.exec(item);
        if (valid != null) {
            let group = ''
            let basket = valid.groups.products

            for (const iterator of basket) {
                let isNum = +iterator
                if (isNum * 1 === isNum) {
                    group += iterator
                }
            }
            if (group == '') {
                group = '00'
            }
            console.log(`Product group: ${group}`);
        } else {
            console.log('Invalid barcode');
        }
        n--
    }
}
solve(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])