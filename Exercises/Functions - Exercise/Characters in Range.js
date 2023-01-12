function charInR(a, b) {
    let startChar = Math.min(a.charCodeAt(0), b.charCodeAt(0));
    let endChar = Math.max(a.charCodeAt(0), b.charCodeAt(0));

    let charsInArr = [];

    for (let i = startChar + 1; i < endChar; i++) {
        charsInArr.push(String.fromCharCode(i));
    }
    console.log(charsInArr.join(" "));
}
charInR('a',
    'd'
)