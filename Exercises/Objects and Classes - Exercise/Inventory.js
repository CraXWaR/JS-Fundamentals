function solve(input) {
    let heros = [];

    for (const iterator of input) {
        let info = iterator.split(' /');
        let currHeroName = info[0];
        let currHeroLevel = info[1];
        let currHeroItems = info[2].split(", ").join(", ")

        let currentHero = {
            name: currHeroName,
            level: currHeroLevel,
            items: currHeroItems,
        };
        heros.push(currentHero)
    }
    heros.sort((a, b) => a.level - b.level)
    for (const iterator of heros) {
       console.log(`Hero: ${iterator.name}`);
       console.log(`level =>${iterator.level}`);
       console.log(`items =>${iterator.items}`);
    }
}
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])