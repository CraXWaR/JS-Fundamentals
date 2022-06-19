function dayOfWeek(i) {
    let day = ["Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday", "Sunday",];
    let day2 = i - 1;
    if (i >= 1 && i <= 7){
        console.log(day[day2]);
    }else{
        console.log("Invalid day!");
    }
}
dayOfWeek(3)