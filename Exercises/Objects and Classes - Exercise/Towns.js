function town(input) {
    let townF = {}

    for (const iterator of input) {
        let info = iterator.split(' | ')
        let town = info[0]
        let latitude = Number(info[1]).toFixed(2);
        let longitude = Number(info[2]).toFixed(2);

        townF.town = town;
        townF.latitude = latitude;
        townF.longitude = longitude;

        console.log(townF);
    }
}
town(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])