function receiveNames(arr) {
    let splitted;
    let catName;
    let catAge;

    for (let i = 0; i < arr.length; i++) {
        splitted = arr[i].split(' ');
        catName = splitted[0];
        catAge = splitted[1];
        class Cat {
            constructor(name, age) {
                this.name = catName;
                this.age = catAge;
            }
            info() {
                console.log(`${this.name}, age ${this.age} says Meow`)
            }
        }
        let cat = new Cat()
        cat.info()
    }
}
cat(['Mellow 2', 'Tom 5'])