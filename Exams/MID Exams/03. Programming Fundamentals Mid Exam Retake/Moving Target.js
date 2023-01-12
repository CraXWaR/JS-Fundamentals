function moveTarget(arr) {
    let nums = arr.shift().split(' ').map(Number);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "End") {
            console.log(nums.join('|'));

        } else if (arr[i].includes("Shoot")) {

            let [index, index2] = arr[i].split(' ').splice(1).map(Number);

            if (index < nums.length) {
                nums[index] -= index2;

                if (nums[index] <= 0) {
                    nums.splice(index, 1);
                }
            }

        } else if (arr[i].includes('Add')) {

            let [index, value] = arr[i].split(' ').splice(1).map(Number);
            if (index < nums.length && index >= 0) {

                nums.splice(index, 0, value);
            } else {
                console.log('Invalid placement!');
            }

        } else if (arr[i].includes('Strike')) {

            let [index, radius] = arr[i].split(' ').splice(1).map(Number);

            if (index - radius >= 0 && index + radius < nums.length) {
                let range = 1 + radius * 2;
                let startIndex = index - radius;
                nums.splice(startIndex, range);

            } else {
                console.log('Strike missed!');
            }
        }
    }
}
moveTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"])
moveTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"])