// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    let firstDrivers = [drivers[0], drivers[1]];
    return firstDrivers;
}
    
const returnLastTwoDrivers = function(drivers){
    let size = drivers.length;
    let lastDrivers = [drivers[size - 2], drivers[size - 1]];
    return lastDrivers;
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fareMultiplier){
        return function(fare){
            return fareMultiplier*fare;
        }
 }
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func){
    return func(drivers);
}