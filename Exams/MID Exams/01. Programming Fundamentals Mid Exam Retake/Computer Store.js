function store(input) {
    let total = 0;
    let index = 0;
    let tax = 0;
    let totalBeforeTax = 0;

    while (input[index] != 'special' && input[index] != 'regular') {
        if (Number(input[index] >= 0)) {
            total += Number(input[index])
        } else {
            console.log('Invalid price!');
        }
        index++;
    }
    if (total > 0) {
        totalBeforeTax = total;
        tax = total * 0.2;
        total += tax;
        if (input[index] == 'special') {
            total = total * 0.90
        }
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${(totalBeforeTax).toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${total.toFixed(2)}$`);
    } else {
        console.log('Invalid order!');
    }
}
store(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])
)