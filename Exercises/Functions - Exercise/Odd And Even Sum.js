function oodAndEvenSum(num) {
    let numAsText = num.toString();
    function totalOddSum(numAsText) {
        let oddSum = 0;
        for (let i = 0; i < numAsText.length; i++) {
            if (numAsText[i] % 2 !== 0) {
                oddSum += Number(numAsText[i])
            }
        }
        return oddSum;
    }
    function totalEvenSum(numAsText) {
        let evenSum = 0;
        for (let i = 0; i < numAsText.length; i++) {
            if (numAsText[i] % 2 === 0) {
                evenSum += Number(numAsText[i])
            }
        }
        return evenSum;
    }


    let oddSum = totalOddSum(numAsText);
    let evenSum = totalEvenSum(numAsText);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oodAndEvenSum(1000435)

