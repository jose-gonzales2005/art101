// index.js - time to coding 
// Author: Noah Dane 
// Date: 

let myTransport = ["2002 Highlander", " Bike", " my feet ^_^ "]

const myMainRide = {
  make: "Toyota",
  model: "Highlander",
  color: "blueish",
  year: "2003",
  age: function() {
    return 2024 - this.year 
  }
}

/*I am assuming when doing this that when we are told reference the elements of 
both myTransport and myMainRide that it be only necessary to reference them once in our console log*/
console.log(myTransport[2], myMainRide.color)

document.writeln("Kinds of transportation I use:", myTransport, "</br>"); 

document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
