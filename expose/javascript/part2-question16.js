let statistics = {
    redCars : 21,
    blueCars : 45,
    greenCars : 12,
    raceCars : 5,
    blackCars : 40,
    rareCars : 2
}
for (var stat in statistics) {
    value = statistics[stat];
    if(stat.charAt(0) == 'r' || value % 2 == 1){
        console.log(value);
    }
}