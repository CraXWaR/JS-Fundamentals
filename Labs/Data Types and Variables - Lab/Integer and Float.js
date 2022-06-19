function int(f1, f2, f3) {
    let sum = f1 + f2+ f3;

    sum % 1 === 0 ? sum += ' - Integer' : sum+= ' - Float';
    console.log(sum);
}
int(9, 100, 1.1)