function houseParty(arr) {
    let listOfGuests = [];
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].toString().split(' ');
        let name = command[0];
        let attendance = command[2];
        if (attendance === 'going!') {
            if (!listOfGuests.includes(name)) {
                listOfGuests.push(name);
            }else {
                console.log(`${name} is already in the list!`)
            }
        }else if (attendance === 'not') {
            if (listOfGuests.includes(name)) {
                listOfGuests.splice(listOfGuests.indexOf(name))
        }else{
            console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(`${listOfGuests.join('\n')}`);
}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)