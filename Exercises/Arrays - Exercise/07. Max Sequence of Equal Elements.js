function maxSeq(arr) {
    let newArr = [];
    let seq = [];

    for(let i = 0; i < arr.length; i++){
        seq = [];
        for(let j = i; j < arr.length; j++){
            if(arr[i] === arr[j]){
                seq.push(arr[j]);
            }else{
                break;
            }
            if(seq.length > newArr.length){
                newArr = seq
            }
        }
    }
    console.log(newArr.join(" "));
}
maxSeq([0, 1, 1, 5, 2, 2, 6, 3, 3])