function print(n1, n2) {
    let sum = 0;
    let squence = "";
    for (let i = n1; i <= n2; i += 1){
        sum += i;
        squence += i + " ";
    }
    console.log(squence);
    console.log(`Sum: ${sum}`);
}
print(5, 10)