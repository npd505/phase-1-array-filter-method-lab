function findMatching(driversArray, name) {
    const newDriversArray = driversArray.filter(n => n.toLowerCase() === name.toLowerCase());

    return newDriversArray
}


function fuzzyMatch(driversArray, letters) {
    const newDriversArray = driversArray.filter(n => n.substring(0, 2) === letters);

    return newDriversArray
}


function matchName(driversObject, name) {
    const newDriversObj = driversObject.filter(function (n) {return n.name === name});

    return newDriversObj
}