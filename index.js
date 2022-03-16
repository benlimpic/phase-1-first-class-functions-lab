// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(drivers.length - 2, drivers.length);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = (integer) => {
    return function (fare) {
        return integer * fare
    };
}

// let x = createFareMultiplier(6);
// console.log(x(100));

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare) ;
}

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare);
}

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(drivers);
}
