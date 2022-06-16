function eplo(input) {
    let eploy = {}
    for (const iterator of input) {
        eploy.name = iterator
        eploy.numb = iterator.length;
        
        console.log(`Name: ${eploy.name} -- Personal Number: ${eploy.numb}`);
    }
}
eplo([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])