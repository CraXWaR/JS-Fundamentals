function listOfProducts(array) {
    let sorted = array.sort();
   
    for (let index = 0; index < array.length; index++) {
       console.log(`${index + 1}.${sorted[index]}`);
       
    }
    console.log('---------------');
    array.sort()
        .forEach((current, index) => 
            console.log((index + 1) + '.' + current)
        )
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])