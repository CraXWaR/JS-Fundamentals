function searchNum(array, nums) {
    let numToTake = nums[0];
    let deleteNumbs = nums[1];
    let searchNum = nums[2];

    let myNewArr = array.splice(0, numToTake);
    myNewArr = myNewArr.splice(deleteNumbs);

    let count = 0;
    for (let index = 0; index < myNewArr.length; index++) {
        if (myNewArr[index] === searchNum) {
            count++
        }
    }
    console.log(`Number ${searchNum} occurs ${count} times.`);
}
searchNum([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
)