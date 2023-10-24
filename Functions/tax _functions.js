"use strict;"

// accepts gross pay and returns the ss tax amount tax rate of 6.2% 

function getSocSecTax(num){
 
  
    let afterTax = num *0.062;
return afterTax
}
console.log("Social Security Tax:" + getSocSecTax(2500))