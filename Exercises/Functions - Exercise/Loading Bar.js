function loadBar(n) {
    let a = ''
    
    for (let index = 0; index < 10; index++){
        if (index + 1 > n / 10) {
            a += '.'
        }else{
            a += '%'
        }
    }
    if (n === 100) {
        console.log('100% Complete!');
    }else{
        console.log(`${n}% [${a}]`);
        console.log(`Still loading...`);
    }
}
loadBar(30)