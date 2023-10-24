"use strict;"

function displayMailingLabel(name,addree,city,state,zip){
    console.log("Niya Williams")
console.log("123 Code road")
console.log("Bronx,")
console.log("New York")
console.log("10333")

}
 displayMailingLabel()

 function addNumbers(num1,num2){
let result = num1+num2;
let answer = `${num1} + ${num2} = ${result}`

 console.log(answer);
 }
 addNumbers(3,2);

 function displayReceipt(totalDue,amountPaid){
    console.log("Total Due:" + "$" + totalDue)
    console.log("Amount Paid:" + "$" + amountPaid)
let changeDue = amountPaid - totalDue;
console.log("Change due:" + "$" + changeDue.toFixed(2))
 }
 console.log(displayReceipt(55.75,100))
 console.log(displayReceipt(100,100))
 console.log(displayReceipt(100,99))