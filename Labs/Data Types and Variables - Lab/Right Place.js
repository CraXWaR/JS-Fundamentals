function palce(a, b, c) {
    let res = a.replace('_', b);
    let output = res === c ? "Matched" : "Not Matched";
    console.log(output);
}
palce('Str_ng', 'I', 'Strong')