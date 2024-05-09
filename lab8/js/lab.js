/* Author: Noah Dane, Syd Young 
Created: Thursday, May 5, 2024 */


function multiplyThis(x){
    return (x * 2 == 100);
}

//test function
console.log("does 3 work?", multiplyThis(3));
console.log("does 50 work?", multiplyThis(50));

//array
array = [100, 50, 35, 1.3562]

var result = array.map(multiplyThis);
//should return a string
console.log("My array", array);

var result = array.map(multiplyThis);
//should reuturn [false, true, false, false]
console.log("Test results of array", array.map(multiplyThis));