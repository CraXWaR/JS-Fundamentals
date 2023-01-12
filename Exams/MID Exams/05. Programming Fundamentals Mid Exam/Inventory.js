function inventory(array) {
    let arr = array.shift().split(', ')
    for (let index = 0; index < array.length; index++) {
        let tokens = array[index].split(' - ')
        let command = tokens[0];
        let item = tokens[1]
        if (command === 'Craft!') {
            console.log(arr.join(', '));
            break;
        }
        if (command === 'Collect') {
            if (arr.includes(item)) {
                continue;
            } else {
                arr.push(item)
            }
        } else if (command === 'Drop') {
            if (arr.includes(item)) {
                arr.splice(arr.indexOf(item), 1)
            } else {
                continue;
            }
        } else if (command === 'Combine Items') {
            let newItems = item.split(':');
            if (arr.includes(newItems[0])) {
                arr.splice(arr.indexOf(newItems[0]) + 1, 0, newItems[1])
            } else {
                continue;
            }
        } else if (command === 'Renew') {
            if (arr.includes(item)) {
                arr.splice(arr.indexOf(item), 1)
                arr.push(item)
            } else {
                continue;
            }
        }
    }
}
// inventory(['Iron, Wood, Sword', 
// 'Collect - Gold', 
// 'Drop - Wood',
// 'Craft!'])
inventory(['Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'])