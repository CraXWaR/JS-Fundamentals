function mult(n1) {
    let sum = 0;
    for (let i = 1; i <= 10; i++){
        sum = n1 * i
        console.log(`${n1} X ${i} = ${sum}`);
    }
}
mult(5)