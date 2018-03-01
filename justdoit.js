"use strict";

function doit() {
    let hours = document.getElementById("hoursFormInput").value;
    let pay = document.getElementById("payrateFormInput").value;
    //console.log(hours * pay);
    //let calculate = hours * pay;
    //document.getElementById("card-text").value = calculate;

    if (hours > 40) {
        hours = hours * 1.5;
        console.log(hours);
    }

    document.getElementById("display-money").innerHTML = hours * pay;
}

    