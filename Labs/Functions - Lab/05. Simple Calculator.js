function simpCalc(n, a, method) {
    let result = 0;
    switch(method){
        case 'multiply':
            result = n * a
        break;
        case 'divide':
            result = n / a
        break;
        case 'add':
            result = n + a
        break;
        case 'subtract':
            result = n - a
        break;
    }
    console.log(result);
}
simpCalc(5,
    5,
    'multiply'
    )