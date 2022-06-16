function solve(phones) {
    let book = {}

    for (const iterator of phones) {
        let tokens = iterator.split(' ')
        book[tokens[0]] = tokens[1]
    }
    
    for (const key in book) {
        console.log(`${key} -> ${book[key]}`);
    }
}
solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])