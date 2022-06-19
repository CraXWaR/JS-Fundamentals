function signCheck(a, b, c) {
    let result = a * b * c;

    if (result < 0){
        console.log("Negative");
    }else{
        console.log("Positive");
    }
}
signCheck( 5,
    12,
   -15
   )