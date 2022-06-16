function round (n1, n2){
    n1 = Number(n1);
    n2 = Number(n2);

    if (n2 > 15){
        n2 = 15
    }
    n1 = n1.toFixed(n2);
    console.log(parseFloat(n1));
}
round(3.1415926535897932384626433832795,2)