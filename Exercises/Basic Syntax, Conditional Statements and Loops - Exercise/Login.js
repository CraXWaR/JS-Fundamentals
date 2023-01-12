function triangle(input) {
    let index = 0
    let truepass = input[0]
    let name = input[index++]

    let strSplit = truepass.split("")
    let revStr = strSplit.reverse()
    let truepas = revStr.join("")
    let fall = 0

    while (true) {
        name = input[index++]
        fall++
        if (name === truepas) {
            console.log(`User ${truepass} logged in.`)
            break;
        } else if (fall > 3) {
            console.log(`User ${truepass} blocked!`);
            break;


        } else {
            console.log("Incorrect password. Try again.")
        }

    }
}
triangle(['Acer', 'login', 'go', 'let me in', 'recA'])