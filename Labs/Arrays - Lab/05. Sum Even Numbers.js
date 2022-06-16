function sumEv(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        let j = Number(arr[i])
        if (j % 2 === 0){
            sum += j
        }
    }
    console.log(sum);
}
sumEv(['1','2','3','4','5','6'])