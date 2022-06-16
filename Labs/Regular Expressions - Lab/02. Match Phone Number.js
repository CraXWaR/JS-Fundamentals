function solve(input) {
    let pattern = /(?:\s|^)\+359( |-)2\1\d{3}\1\d{4}\b/g
    let validPhones = [];
    
    while ((valid = pattern.exec(input)) !== null) {
        validPhones.push(valid[0].trim());
    }
    console.log(validPhones.join(', '));
}
solve('+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222')