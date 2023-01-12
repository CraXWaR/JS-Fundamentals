function pig(input) {
    let food = input[0]
    food *= 1000
    let hay = input[1]
    hay *= 1000
    let cover = input[2]
    cover *= 1000
    let weight = input[3]
    weight *= 1000

    isEnough = true

    for (let index = 1; index <= 30; index++) {
        if (food < 300 || hay < food * 0.05 || cover < weight / 3) {
            console.log('Merry must go to the pet store!');
            isEnough = false;
            break;
        }
        food -= 300
        if (index % 2 === 0) {
            hay -= food * 0.05;
        }
        if (index % 3 === 0) {
            cover -= weight / 3;
        }
    }
    if (isEnough) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
    }
}
pig(["10",
    "5",
    "5.2",
    "1"])