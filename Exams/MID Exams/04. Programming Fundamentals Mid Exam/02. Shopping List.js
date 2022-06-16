function shoppingList(input) {
    let list = input.shift().split('!')
    
    for (let index = 0; index < input.length; index++) {
        let commands = input[index].split(' ')
        
        if(commands[0] === 'Go'){
            console.log(list.join(', '));
        }else if (commands[0] === 'Urgent') {
            if (list.includes(commands[1])) {
                continue;
            }else{
                list.unshift(commands[1])
            }
        }else if(commands[0] === 'Unnecessary'){
            if (list.includes(commands[1])) {
                list.splice(list.indexOf(commands[1]), 1)
                continue;
            }
        }else if(commands[0] === 'Correct'){
            if (list.includes(commands[1])) {
                list[list.indexOf(commands[1])] = commands[2]
                continue;
            }
        }else if(commands[0] === 'Rearrange'){
            if (list.includes(commands[1])) {
                list.splice(list.indexOf(commands[1]), 1)
                list.push(commands[1])
                continue;
            }
        }
    }
}
shoppingList(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"])
shoppingList(["Milk!Pepper!Grapes!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])