function huntingGame(input) {
    let days = input.shift();
    days = Number(days)
    let players = input.shift()
    players = Number(players)
    let groupEnergy = input.shift()
    groupEnergy = Number(groupEnergy)
    let waterDay = input.shift()
    waterDay = Number(waterDay)
    let foodDay = input.shift()
    foodDay = Number(foodDay)
    
    let win = true

    let totalWater = days * players * waterDay
    let totalFood = days * players * foodDay

    for (let index = 1; index <= days; index++) {
        groupEnergy -= input[index - 1]
        if (groupEnergy <= 0) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            win = false
            break;
        }
        if (index % 2 === 0) {
            groupEnergy  += (groupEnergy * 5) / 100;
            totalWater -= (totalWater * 30) / 100;
        }
        if (index % 3 === 0) {
            totalFood -= totalFood / players;
            groupEnergy  += (groupEnergy * 10) / 100;
        }
    }
    if (win) {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    }
}
huntingGame(["12",
"6",
"4430",
"9.8",
"5.5",
"620.3",
"840.2",
"960.1",
"220",
"340",
"674",
"365",
"345.5",
"212",
"412.12",
"258",
"496"])