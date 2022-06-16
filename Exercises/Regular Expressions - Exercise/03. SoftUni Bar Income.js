function solve(input) {
    let sum = 0;
    for (const iterator of input) {
        let regex = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<quantity>\d+)\|[^|$%.]*?(?<price>\d+(\.\d+)?)\$/;
        let result = regex.exec(iterator);
        if (result) {
            let price = Number(result.groups.quantity) * Number(result.groups.price)
            console.log(`${result.groups.customer}: ${result.groups.product} - ${price.toFixed(2)}`);
            sum += price
        }else if (iterator === 'end of shift'){
            console.log(`Total income: ${sum.toFixed(2)}`);
        }
    }
}
solve(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'])