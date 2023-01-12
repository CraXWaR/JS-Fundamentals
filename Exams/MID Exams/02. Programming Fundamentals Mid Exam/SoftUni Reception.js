function reception(input) {
    let e1 = Number(input[0]);
    let e2 = Number(input[1]);
    let e3 = Number(input[2]);
    let students = Number(input[3])

    let work = e1 + e2 + e3;
    let time = 0;

    while (students > 0) {
        time++;
        if (time % 4 != 0) {
            students -= work
        }
    }
    console.log(`Time needed: ${time}h.`);
}
//reception(['5','6','4','20'])
reception(['1', '2', '3', '45'])