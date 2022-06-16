function heartDelivery(array) {
    let house = array.shift().split("@").map(Number)
    let cupid = 0;

    while (array[0] !== "Love!") {
        let tokens = array.shift().split(' ');
        let jump = Number(tokens[1]);
        
        cupid += jump
        if (cupid >= house.length) {
            cupid = 0
        }
        if (house[cupid] == 0) {
            console.log(`Place ${cupid} already had Valentine's day.`);
        }else{
            house[cupid] -= 2
            if (house[cupid] == 0) {
                console.log(`Place ${cupid} has Valentine's day.`);
            }
        }
    }
    let missed = 0;
    for (const iterator of house) {
        if(iterator > 0){
            missed++;
        }
    }
    console.log(`Cupid's last position was ${cupid}.`);
    if (missed > 0) {
        console.log(`Cupid has failed ${missed} places.`);
    }else{
        console.log("Mission was successful.");
    }
}
heartDelivery(["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"])
// heartDelivery(["2@4@2",
// "Jump 2",
// "Jump 2",
// "Jump 8",
// "Jump 3",
// "Jump 1",
// "Love!"])