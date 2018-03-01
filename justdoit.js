"use strict";

function doMasterFunction() {

    let maxWeeklyHours = 40;
    let setHours;
    let setPay;

    setHours = getInput("hoursFormInput");
    setPay = getInput("hoursFormInput");
    
    setPay = isOvertime(setHours, maxWeeklyHours);

    setMoneyOutput("display-money", setPay);

}

function getInput(elementName) {
    return  document.getElementById(elementName).value;
}

function isOvertime(hours, maxHours) {
    if (hours > maxHours) {
        hours = hours * 1.5;
        console.log(hours);
    }
    return hours;
}

function setMoneyOutput(elementName, pay) {
    document.getElementById(elementName).innerHTML = pay;
    return;
}

doMasterFunction();