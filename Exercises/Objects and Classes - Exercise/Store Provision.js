function storeProv(avStocks, delivStocks) {
    let products = {};

    for (let index = 0; index < avStocks.length; index += 2) {
        let currProd = avStocks[index];
        products[currProd] = Number(avStocks[index + 1])
    }
    for (let index = 0; index < delivStocks.length; index += 2) {
        let currProd = delivStocks[index];
        if (!products.hasOwnProperty(currProd)) {
            products[currProd] = 0;
        }
        products[currProd] += Number(delivStocks[index + 1])
    }
    for (const iterator of Object.keys(products)) {
        console.log(`${iterator} -> ${products[iterator]}`);
    }
}
storeProv([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])