function ladybugs(arr) {
    let arrLength = arr[0];
    let initValue = arr[1].split(' ');
    let tempArr = [];
    let currentMovie = [];
    let curStep = 0;
    let indexForStart = 0;
    let command = "";
    if (arrLength > 0 && arrLength <= 1000) {

        for (let k = 0; k < arrLength; k++) {
            tempArr[k] = 0;
        }
        for (let i = 0; i < initValue.length; i++) {
            if (Number(initValue[i]) >= 0 && Number(initValue[i]) < arrLength) {
                tempArr[initValue[i]] = 1;
            }
        }

        for (let i = 2; i < arr.length; i++) {
            currentMovie = arr[i].split(' ');
            indexForStart = Number(currentMovie[0]);
            command = currentMovie[1];

            if (tempArr[indexForStart] !== 1 || indexForStart < 0 || indexForStart >= tempArr.length) {
                continue;
            }

            curStep = Number(currentMovie[2]);
            if (curStep < 0) {
                curStep = Math.abs(curStep);
                if (command === 'right') {
                    command = 'left';
                } else if (command === 'left') {
                    command = 'right';
                }
            }
            tempArr[indexForStart] = 0;
            if (command === 'right') {
                let newPosition = indexForStart + curStep;
                if (tempArr[newPosition] === 1) {
                    for (let j = newPosition; j < arrLength; j += curStep) {
                        if (tempArr[j] == 1) {
                            continue
                        } else {
                            if (tempArr[newPosition] <= arrLength) {
                                tempArr[j] = 1;
                            }
                            break;
                        }
                    }
                } else {
                    if (tempArr[newPosition] <= arrLength - 1) {
                        tempArr[newPosition] = 1;
                    }
                }
            } else {
                let newPosition = indexForStart - curStep;
                if (tempArr[newPosition] === 1) {

                    for (let j = newPosition; j >= 0; j -= curStep) {
                        if (tempArr[j] == 1) {
                            continue
                        } else {
                            if (newPosition >= 0) {
                                tempArr[j] = 1;
                            }
                            break;
                        }
                    }
                }
                else {
                    if (newPosition >= 0) {
                        tempArr[newPosition] = 1;
                    }
                }
            }
        }
        if (tempArr.length <= arrLength) {
            console.log(tempArr.join(' '));
        }
    }
}
ladybugs([3, '0 1',
    '0 right 1',
    '2 right 1']
)