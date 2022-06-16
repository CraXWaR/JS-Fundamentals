function solve(input) {
    let n = input.shift()
    let reg = /^(\$|\%)(?<name>[A-Z][a-z]{3,})\1:\s(\[[0-9]+\]\|){3,}$/gm

    for (let index = 0; index < n; index++) {
        let arr = []
        let valid = input[index];
        let isValid = reg.exec(valid)
        if (isValid) {
            valid = valid.split(' ')
            let a = valid[1].split('|')
            for (const iterator of a) {
                let b = iterator.replace('[', "").replace(']', "")
                let char = String.fromCharCode(b);
                arr.push(char)
            }
            let validnost = valid[0].replace(/[$%]/g,'');
            console.log(`${validnost} ${arr.join('')}`);
        }else{
            console.log('Valid message not found!');
        }
    }
}
solve(["4",
"$Request$: [73]|[115]|[105]|",
"%Taggy$: [73]|[73]|[73]|",
"%Taggy%: [118]|[97]|[108]|",
"$Request$: [73]|[115]|[105]|[32]|[75]|"])
console.log('-------');
solve(["3",
"This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
"$tAGged$: [97][97][97]|",
"$Request$: [73]|[115]|[105]|true"])