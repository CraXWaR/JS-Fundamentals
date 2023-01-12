function makeADictionary(input) {
    let dictionary = {}
    for (const iterator of input) {
        let obj = JSON.parse(iterator);
        dictionary = Object.assign(dictionary, obj);
    }
    let sort = Object.keys(dictionary)

    sort.sort((a, b) => a.localeCompare(b));

    for (const iterator of sort) {
        let definition = dictionary[iterator];
        console.log(`Term: ${iterator} => Definition: ${definition}`);
    }
}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])
