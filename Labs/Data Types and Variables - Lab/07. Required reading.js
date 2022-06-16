function requered (nPages, pagesHour, days){
    let totalTime = nPages / pagesHour; 
    let hourDay = totalTime / days;
    
    console.log(hourDay);
}
requered(212, 20, 2)