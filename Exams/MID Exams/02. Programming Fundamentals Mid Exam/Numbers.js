function numbs(string) {
    let sum = 0;
    let nums = string.split(' ')
    let newArr = []
    for (let index = 0; index < nums.length; index++) {
        sum += Number(nums[index])
    }
    sum /= nums.length

    for (let index = 0; index < nums.length; index++) {
        if (nums[index] > sum) {
            newArr.push(nums[index])
        }
    }
    let topValues = newArr.sort((a, b) => b - a).slice(0, 5);
    if (topValues.length > 0) {
        console.log(topValues.join(' '));
    } else {
        console.log('No');
    }
}
numbs('10 20 30 40 50')
numbs('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbs('1')