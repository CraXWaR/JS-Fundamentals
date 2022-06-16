function addAndSub(arr) {
    let sum = 0;
    let newArrSum = 0;

    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
        if (arr[i] % 2 === 0){
            arr[i] += i;
        }else {
            arr[i] -= i;
        }
        newArrSum += arr[i]
    }
    console.log(arr);
    console.log(sum);
    console.log(newArrSum);
}
addAndSub([5, 15, 23, 56, 35])