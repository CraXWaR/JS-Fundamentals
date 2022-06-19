function firstAndLasK(arr) {
    let firstEl = arr.shift();

    let firstElements = arr.slice(0, firstEl)
    let lastElements = arr.slice(arr.length - firstEl, arr.length)

    console.log(firstElements.join(' '));
    console.log(lastElements.join(' '));
    console.log('------------');
    console.log(arr.slice(0, firstEl).join(' '));
    console.log(arr.slice(arr.length - firstEl, arr.length).join(' '));
}
// firstAndLasK([2, 7, 8, 9])
firstAndLasK([3, 6, 7, 8, 9])