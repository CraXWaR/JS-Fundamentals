function solve(input) {
    let fileNameIndexStart = input.lastIndexOf('\\') + 1
    let fileExtetnisionStart = input.lastIndexOf('.') + 1
    let fileNameIndexEnd = fileExtetnisionStart - 1

    let fileName = input.substring(fileNameIndexStart, fileNameIndexEnd)
    let fileExtetnsion = input.substring(fileExtetnisionStart);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtetnsion}`);

}
solve('C:\\Internal\\training-internal\\Template.pptx')