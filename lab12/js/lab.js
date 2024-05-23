/* Author: Noah Dane, Syd Young 

lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

 Requirements: jQuery must be loaded for this script to work.

Date: Thur, May 16, 2024

*/

let houses = ["Slaytherin", "Hufflepuffn", "Ravenclaw", "Griffyndor"];
let descs = ["Oooh slayyy you evil af girl sorry", "Haha You're hungry and smoke hahahaha", "DORK", "Congratulations! You're the main character"]


function sortingHat(stringy) { 
    return stringy.length % 4
}

let myButthehe = document.getElementById("button");
myButthehe.addEventListener("click", function() {
    let name = document.getElementById("input").value
    document.getElementById("outputHouse").innerHTML = "<p>The Sorting Hat hath sorted thou into " + houses[sortingHat(name)] + "!</p>";
    document.getElementById("outputDesc").innerHTML = "<p>" + descs[sortingHat(name)] + "</p>";
}) 

