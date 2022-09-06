// Code your solution here


function findMatching(drivers, name){
    let matchingNames= drivers.filter(
    (match) => match.toLowerCase() === name.toLowerCase()
    )
    return matchingNames
}

function fuzzyMatch(drivers, name) {
    const driversArray = drivers.filter(
        (match) => match.toLowerCase().indexOf(name.toLowerCase()) === 0
    )
    return driversArray;
}

function matchName(driver, name) {
    const driversArray = driver.filter(
        (match) => match.name === name
    )
    return driversArray;}