function equalSum(arr) {
    let hasEqual = false;

    for (let i = 0; i < arr.length; i++){
        let leftSum = 0;
        let rightSum = 0;

        for(j = i - 1; j >= 0; j--){
            leftSum += arr[j];
        }
        for(n = i + 1; n < arr.length; n++){
            rightSum += arr[n ]
        }
        if (leftSum === rightSum){
            console.log(i);
            hasEqual = true;
        }
    }
    if(!hasEqual){
        console.log("no");
    }
}
equalSum([1, 2, 3, 3])