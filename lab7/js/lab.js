/* Author: Noah Dane, Syd Young 
Created: Thursday, May 12, 2024 */



//Initial working inst, fufills: 2, 5
let userName = window.prompt()

function wordyTime() {
    return userName.split("").sort().join("");
}

document.writeln(wordyTime())


function anagramyTime() {
    return userName.split("").sort().join("");
}

document.writeln(wordyTime())