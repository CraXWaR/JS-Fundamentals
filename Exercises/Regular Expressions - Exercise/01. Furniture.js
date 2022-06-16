function solve(input) {
    let sum = 0;
    
    console.log('Bought furniture:');
    for (const iterator of input) {
        if (iterator === 'Purchase') {
            break;
        }
        let regex = />>(?<name>[A-Za-z\s]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/gm
        let result = regex.exec(iterator)
        if (result !== null) {
            sum += +result.groups.price * +result.groups.quantity;
            console.log(result.groups.name);
        }
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`);
}
solve(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])