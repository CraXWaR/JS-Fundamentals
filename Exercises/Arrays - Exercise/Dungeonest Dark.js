function dung(arr) {
    let health = 100;
    let coins = 0;
    let rooms = arr[0].split("|")
    let isFinished = true;
    let healedFor = 0;

    for (let i = 0; i < rooms.length; i++) {
        let object = rooms[i].split(" ")
        if (object[0] === 'potion') {
            if (health === 100) {
                console.log(`Current health: ${health} hp.`);
            } else {
                if (Number(object[1]) + health > 100) {
                    healedFor = 100 - health;
                } else {
                    healedFor += Number(object[1]);
                }
                if (health > 100) {
                    health = 100;
                }
                health += healedFor;
                console.log(`You healed for ${healedFor} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        } else if (object[0] === 'chest') {
            coins += Number(object[1]);
            console.log(`You found ${Number(object[1])} coins.`);
        } else {
            if (health > 0 && health > Number(object[1])) {
                health -= Number(object[1]);
                console.log(`You slayed ${object[0]}.`)
            } else {
                isFinished = false;
                console.log(`You died! Killed by ${object[0]}.`);
                console.log(`Best room: ${i + 1}`);
                break;
            }
        }
    }
    if (isFinished) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dung(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dung(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])