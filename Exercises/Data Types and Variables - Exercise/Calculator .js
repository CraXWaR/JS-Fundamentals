function calc(num1, oper, num2) {
    let sum;

    switch (oper) {
        case "+":
            sum = num1 + num2;
            break;
        case "-":
            sum = num1 - num2;
            break;
        case "/":
            sum = num1 / num2;
            break;
        case "*":
            sum = num1 * num2;
            break;
    }
    console.log(sum.toFixed(2));
}
calc(5,
    '+',
    10
)