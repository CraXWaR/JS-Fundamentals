function solve(array) {
    
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        for (let j = index + 1; j < array.length; j++) {
            const elementTwo = array[j];
            
            if (element === elementTwo) {
                array.splice(j, 1)
                j = j - 1;
            }
        }
    }
    console.log(array.join(' '));
}

solve([7, 8, 9, 7, 2, 3, 4, 1, 2])