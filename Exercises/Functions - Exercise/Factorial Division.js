function factDiv(a, b) {
    let firstFact = factorial(a);
    let secondFact = factorial(b);

    let div = firstFact / secondFact

    console.log(div.toFixed(2));

    function factorial(n) {
        let num = 1
        for (let i = 1; i <= n; i++) {
            num *= i
        }
        return num;
    }
}
factDiv(5,
    2
)