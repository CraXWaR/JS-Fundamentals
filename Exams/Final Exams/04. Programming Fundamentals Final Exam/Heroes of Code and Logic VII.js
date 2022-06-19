function solve(input) {
    let n = input.shift()
    let heros = {}

    for (let index = 0; index < n; index++) {
        let tokens = input.shift().split(' ')
        let heroName = tokens[0]
        let heroHp = +tokens[1]
        let heroMp = +tokens[2]

        heros[heroName] = {
            heroHp,
            heroMp
        }
    }

    while (input[0] !== "End") {
        let line = input.shift();
        let tokens = line.split(' - ');
        let command = tokens[0]

        if (command === 'CastSpell') {
            if (heros[tokens[1]].heroMp >= +tokens[2]) {
                heros[tokens[1]].heroMp -= +tokens[2]
                console.log(`${tokens[1]} has successfully cast ${tokens[3]} and now has ${heros[tokens[1]].heroMp} MP!`);
            }else{
                console.log(`${tokens[1]} does not have enough MP to cast ${tokens[3]}!`);
            }
        } else if (command === 'TakeDamage') {
            heros[tokens[1]].heroHp -= +tokens[2];
            if (heros[tokens[1]].heroHp > 0) {
                console.log(`${tokens[1]} was hit for ${tokens[2]} HP by ${tokens[3]} and now has ${heros[tokens[1]].heroHp} HP left!`);
            }else{
                delete heros[tokens[1]]
                console.log(`${tokens[1]} has been killed by ${tokens[3]}!`);
            }
        } else if (command === 'Recharge') {
            if (heros[tokens[1]].heroMp + +tokens[2] > 200) {
                let tempMp = 200 - heros[tokens[1]].heroMp
                heros[tokens[1]].heroMp = 200
                console.log(`${tokens[1]} recharged for ${tempMp} MP!`);
            }else{
                heros[tokens[1]].heroMp += +tokens[2]
                console.log(`${tokens[1]} recharged for ${tokens[2]} MP!`);
            }
        } else if (command === 'Heal') {
            if (heros[tokens[1]].heroHp + +tokens[2] > 100) {
                let tempHp = 100 - heros[tokens[1]].heroHp
                heros[tokens[1]].heroHp = 100
                console.log(`${tokens[1]} healed for ${tempHp} HP!`);
            }else{
                heros[tokens[1]].heroHp += +tokens[2]
                console.log(`${tokens[1]} healed for ${tokens[2]} HP!`);
            }
        }
    }
    for (const [name, keys] of Object.entries(heros)) {
        console.log(name);
        console.log(`  HP: ${keys.heroHp}`);
        console.log(`  MP: ${keys.heroMp}`);
    }
}
solve(["2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"])