function oddSum (n){
    let sum = 0;
    let count = 0;
    for (i = 1; i <= 100; i+=2){
        console.log(i);
        count++;
        sum+=i;
        if(count == n){
            console.log(`Sum: ${sum}`);
            break;
        }
    }
}
oddSum(5)