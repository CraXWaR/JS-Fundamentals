function shootWin(arr) {
    let darts = arr[0].split(' ').map(Number);
    let commands = arr.slice(1);
    let shotCount = 0;

    for (let index of commands) {
        if (index === 'End') {
            console.log(`Shot targets: ${shotCount} -> ${darts.join(' ')}`);

        } else {

            index = Number(index);

            if (darts.length > index) {
                darts = darts.map(
                    e => {
                        if (e > darts[index]) {
                            return e -= darts[index];

                        } else {

                            if (e != -1) {
                                return e += darts[index];
                            }

                            return e;
                        }
                    }
                );

                darts[index] = -1;
                shotCount++;
            }
        }
    }
}
shootWin(["24 50 36 70", 
"0",
"4",
"3",
"1",
"End"])