function formGrade(n) {
    if (n < 3.00) {
        console.log('Fail (2)');
    } else if (n < 3.50) {
        console.log(`Poor (${n.toFixed(2)})`);
    } else if (n >= 3.50 && n < 4.50) {
        console.log(`Good (${n.toFixed(2)})`);
    } else if (n >= 4.50 && n < 5.50) {
        console.log(`Very good (${n.toFixed(2)})`);
    } else {
        console.log(`Excellent (${n.toFixed(2)})`);
    }
}
formGrade(3.33)