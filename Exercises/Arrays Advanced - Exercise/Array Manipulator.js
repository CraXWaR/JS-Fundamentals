function arrMuni(array, commands) {
    for (const iterator of commands) {
        let token = iterator.split(' ')
        switch (token[0]) {
            case 'add':
                array.splice(token[1], 0, Number(token[2]));
                break;
            case 'addMany':
                let index = Number(token[1])
                token.splice(0, 2);
                let numsToAdd = token.map(Number)
                array.splice(index, 0, ...numsToAdd);
                break;
            case 'contains':
                let result = array.indexOf(Number(token[1]))
                console.log(result);
                break;
            case 'remove':
                array.splice(token[1], 1);
                break;
            case 'shift':
                for (let index = 0; index < token[1]; index++) {
                    let firstNumb = array.shift();
                    array.push(firstNumb)
                }
                break;
            case 'sumPairs':
                let resArr = [];
                if (array.length % 2 !== 0) {
                    array.push(0);
                }
                for (let index = 0; index < array.length - 1; index += 2) {
                    let sum = array[index] + array[index + 1];
                    resArr.push(sum)
                }
                array = resArr;
                break;
            case 'print':
                console.log(`[ ${array.join(', ')} ]`)
                break;
        }
    }
}
arrMuni([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]
)
