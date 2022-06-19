function solve(input) {
    let string = input[0]
    let regex = /([#]|[\|])(?<name>[A-Za-z\s]+)\1(?<date>[0-9]{2}[\/][0-9]{2}[\/][0-9]{2})\1(?<call>[0-9]{1,5})\1/g;

    let isMatch = null;
    let totalCall = 0;
    let provisions = [];

    while ((isMatch = regex.exec(string))) {
        let food = isMatch.groups['name'];
        let date = isMatch.groups['date'];
        let calories = isMatch.groups['call'];
        totalCall += +calories;
        provisions.push(`food: ${food}, Best before: ${date}, Nutrition: ${calories}`)
    }
    let days = Math.floor(totalCall / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    console.log(provisions.join('\n'));
}
solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
])