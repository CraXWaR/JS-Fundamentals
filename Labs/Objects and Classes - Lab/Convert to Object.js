function conventer(input) {
    let obj = JSON.parse(input);

    for (const iterator of Object.keys(obj)) {
        console.log(`${iterator}: ${obj[iterator]}`);
    }
}
conventer('{"name": "George", "age": 40, "town": "Sofia"}')