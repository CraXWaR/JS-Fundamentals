function solve(input) {
    let inventoryArr = input.shift().split(' ');

    for (let element of input) {
        let command = element.split(' ')[0];
        let item = element.split(' ')[1];

        switch (command) {
            case 'Buy':
                if (!inventoryArr.includes(item)) {
                    inventoryArr.push(item);
                }
                break;
            case 'Trash':
                if (inventoryArr.includes(item)) {
                    inventoryArr.splice(inventoryArr.indexOf(item), 1);
                }
                break;
            case 'Repair':
                if (inventoryArr.includes(item)) {
                    let itemToRepair = inventoryArr.splice(inventoryArr.indexOf(item), 1);
                    inventoryArr.push(itemToRepair);
                }
                break;
            case 'Upgrade':
                let tokens = item.split('-');
                let itemToUpgrade = tokens[0];
                let upgrade = tokens[1];

                if (inventoryArr.includes(itemToUpgrade)) {
                    inventoryArr.splice(inventoryArr.indexOf(itemToUpgrade) + 1, 0, `${itemToUpgrade}:${upgrade}`);
                }
                break;
        }
    }

    console.log(inventoryArr.join(' '));
}
solve(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
)