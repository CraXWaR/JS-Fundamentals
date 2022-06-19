function parkingTracker(data) {
 
    function objGenerator(data) {
        return data.reduce((a, b) => {
            let [dir, x] = b.split(', ');
            if (dir == "IN") {
                a[x] = 0;
            } else {
                delete a[x];
            }
            return a;
        }, {});
    }
 
    let parkingLot = objGenerator(data);
 
    const sortByNumber = (a, b) => a.localeCompare(b)
 
    function outputParse(obj, sort) {
        if (Object.entries(obj).length == 0) {
            return 'Parking Lot is Empty';
        }
        return Object.keys(obj).sort(sort).join('\n');
    }
 
    return outputParse(parkingLot, sortByNumber);
}
solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)