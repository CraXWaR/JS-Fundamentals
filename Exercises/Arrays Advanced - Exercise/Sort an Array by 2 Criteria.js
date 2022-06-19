function sort(arr) {
    let sortAlpha = arr.sort();
    let sortLength = sortAlpha.sort((a,b) => a.length - b.length)

    console.log(sortLength.join(`\n`))
}
sort(['alpha', 'beta', 'gamma'])