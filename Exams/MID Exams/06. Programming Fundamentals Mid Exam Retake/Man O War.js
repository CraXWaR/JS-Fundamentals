function solve(arr) {
    let ship = arr.shift().split('>').map(Number);
    let warship = arr.shift().split('>').map(Number);
    let maxHp = Number(arr.shift());
    let result = '';
 
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ')[0];
 
 
        if (command == 'Fire') {
            let index = Number(arr[i].split(' ')[1]);
            let dmg = Number(arr[i].split(' ')[2]);
 
            if (index >= 0 && index < warship.length) {
                warship[index] -= dmg;
                if (warship[index] <= 0) {
                    return result += 'You won! The enemy ship has sunken.\n';
                }
            }
 
        } else if (command == "Defend") {
            let start = Number(arr[i].split(' ')[1]);
            let end = Number(arr[i].split(' ')[2]);
            let dmg = Number(arr[i].split(' ')[3]);
 
            if ((start >= 0 && start < ship.length) && (end > 0 && end < ship.length)) {
                ship = ship.map((e, i) => {
                    if (i >= start && i <= end) {
                        return e -= dmg;
                    }
                    return e;
                })
            }
            if (ship.slice(start, end).some(e => e <= 0)) {
                return result += 'You lost! The pirate ship has sunken.\n';
            }
 
        } else if (command == "Repair") {
            let index = Number(arr[i].split(' ')[1]);
            let hp = Number(arr[i].split(' ')[2]);
 
            if (index >= 0 && index < ship.length) {
                ship[index] + hp > maxHp ? ship[index] = maxHp : ship[index] += hp;
 
            }
 
        } else if (command == "Status") {
 
            result += `${ship.filter(e => e < (maxHp * 0.2)).length} sections need repair.\n`;
 
        } else if (command == "Retire") {
            break;
        }
    }
 
        result += `Pirate ship status: ${ship.reduce((a, b) => a + b, 0)}\nWarship status: ${warship.reduce((a, b) => a + b, 0)}`;
 
    return result;
}
manOWar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])
