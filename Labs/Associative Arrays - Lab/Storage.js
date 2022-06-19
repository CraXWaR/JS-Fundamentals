function solve(storage) {
    let store = {}

    for (const iterator of storage) {
        let tokens = iterator.split(' ')

        if (tokens[0] in store) {
            store[tokens[0]] += Number(tokens[1]) 
        }else{
            store[tokens[0]] = Number(tokens[1])
        }
    }
    
    for (const key in store) {
        console.log(`${key} -> ${store[key]}`);
    }
}
solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])