function perfectNumber(num) {
    let arr = populateArrayWithDividors(num);
    
    if (sumNumbersInArray(arr) == num) {
        console.log('We have a perfect number!');
    }
    else {
        console.log(`It's not so perfect.`);
 
    }
 
    function populateArrayWithDividors(number) {
        let arrayOfPossitiveDev = [];
        for (i = 1; i < number; i++) {
            if (number % i == 0) {
                arrayOfPossitiveDev.push(i)
            }
        }
        return arrayOfPossitiveDev;
    }
 
    function sumNumbersInArray(arr) {
        let sum = 0;
        for (let iterator of arr) {
            sum += iterator;
        }
        return sum;
    }
}
perfectNumber(1236498)