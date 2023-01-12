function palinD(array) {

    for (let index = 0; index < array.length; index++) {
        let a = array[index];
        let rev = Number(a.toString().split("").reverse().join(""));
        if (rev === array[index]) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
palinD([123, 323, 421, 121])