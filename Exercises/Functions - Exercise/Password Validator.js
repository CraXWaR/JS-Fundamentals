function passValid(inputPass) {
    if (lengthCheck(inputPass) && contentCheck(inputPass) && digitCountCheck(inputPass)) {
        console.log("Password is valid");
    } else {
        if (!lengthCheck(inputPass)) {
            console.log("Password must be between 6 and 10 characters")
        }
        if (!contentCheck(inputPass)){
            console.log("Password must consist only of letters and digits")
        }
        if (!digitCountCheck(inputPass)) {
            console.log("Password must have at least 2 digits")
        }
    }
    function lengthCheck(stringPassword) {
        return stringPassword.length >= 6 && stringPassword.length <= 10;
    }
    function digitCountCheck(stringPassword) {
        let digitCounter = 0;
        for (let char of stringPassword) {
            let charASCIICode = char.charCodeAt(0);
 
            if (charASCIICode >= 48 && charASCIICode <= 57) {
                digitCounter++;
            }
        }
        if (digitCounter >= 2) {
            return true;
        }
    }
    function contentCheck(stringPassword) {
        let isCorrect = true;
 
        for (let char of stringPassword) {
            let charASCIICode = char.charCodeAt(0);
 
            if ((charASCIICode >= 48 && charASCIICode <= 57) || 
            (charASCIICode >= 65 && charASCIICode <= 90) || (charASCIICode >= 97 && charASCIICode <= 122)) {
                continue;
            } else {
                isCorrect = false;
                break;
            }
        }
        return isCorrect;
    }
}
passValid('logIn')