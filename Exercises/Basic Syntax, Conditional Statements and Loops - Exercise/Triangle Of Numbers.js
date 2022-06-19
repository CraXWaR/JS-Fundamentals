function trig(n1) {
    for(let i = 1; i <= n1; i++){
        let line = "";
        for (let j = 1; j <= i; j++){
            line += i;
            if (j !== i){
                line += " ";
            }
        }
        console.log(line);
    }
}
trig(5)