function glad(lostFights, helmPrice, swordPrice, shieldPrice, armorPrice) {
    let totalPrice = 0;

    for (let currFight = 1; currFight <= lostFights; currFight++) {
        if (currFight % 2 === 0) {
            totalPrice += helmPrice
        }
        if (currFight % 3 === 0) {
            totalPrice += swordPrice
        }
        if (currFight % 6 === 0) {
            totalPrice += shieldPrice
        }
        if (currFight % 12 === 0) {
            totalPrice += armorPrice
        }
    }
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}
glad(7,
    2,
    3,
    4,
    5
)