function order(item, n) {
    let price = 0;
    switch (item) {
        case "coffee":
            price = n * 1.50
            break;
        case "water":
            price = n * 1.00
            break;
        case "coke":
            price = n * 1.40
            break;
        case "snacks":
            price = n * 2.00
            break;
    }
    console.log(price.toFixed(2));
}
order("water", 5)