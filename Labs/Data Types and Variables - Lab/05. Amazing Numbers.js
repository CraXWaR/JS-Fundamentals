function num(n) {
    let result = 0;
    let numAsString = String(n);

    for (let i = 0; i < numAsString.length; i++){
        result += Number(numAsString[i]);
    }

    let resultAsString = String(result);

    let special = false;

    for (let i = 0; i < resultAsString.length; i++){
        if (resultAsString[i] === '9'){
            special = true;
        }
    }

    console.log(`${n} Amazing? ${special ? 'True' : 'False'}`);
}
num(1233)