function memoryGame(array) {
    let sequence = array[0].split(" ");
    let commands = array.slice(1);
    let moves = 0;
 
    for (let i = 0; i < commands.length; i++) {
        let currCommand = commands[i];
        if (currCommand === "end") {
        console.log(`Sorry you lose :(\n${sequence.join(" ")}`);
        break;
        }
        let [index1, index2] = currCommand.split(" ");
        moves++;
 
        if (sequence[index1] == undefined || sequence[index2] == undefined) {
        console.log(`Invalid input! Adding additional elements to the board`);
        sequence.splice(sequence.length / 2, 0, `${-moves}a`, `${-moves}a`);
        }else{
            if (sequence[index1] === sequence[index2]) {
                console.log(
            `Congrats! You have found matching elements - ${sequence[index1]}!`
                );
                sequence;
                if (index1 > index2) {
                    sequence.splice(index1, 1)
                    sequence.splice(index2, 1);
                }else{
                    sequence.splice(index2, 1)
                    sequence.splice(index1, 1);
                }
            }else{
                console.log(`Try again!`);
            }
        }
        if (sequence.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            break;
        }
    }
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
])