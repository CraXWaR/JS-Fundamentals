function conventer(name, lastName, hairColor) {
    let obj = {
        name,
        lastName,
        hairColor
    }
    let result = JSON.stringify(obj)
    
    console.log(result);
}
conventer('George', 'Jones', 'Brown')