function revPlace(myAarr) {
    for(let i = 0; i < myAarr.length / 2; i++){
        let k = myAarr.length - 1 - i;
        let temp = myAarr[i];
        myAarr[i] = myAarr[k];
        myAarr[k] = temp;
    }
    console.log(myAarr.join(' '));
}
revPlace(['a', 'b', 'c', 'd', 'e'])