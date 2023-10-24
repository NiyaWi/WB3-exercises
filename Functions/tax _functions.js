"use strict;"

// accepts gross pay and returns the ss tax amount tax rate of 6.2% 

function getSocSecTax(num){
 
  
    let afterTax = num *0.062;
return afterTax
}
console.log("Social Security Tax:" + getSocSecTax(2500))


function getMedicareTax(tax){

    let postTax = tax*0.0145;
    return postTax;
}

console.log("Medicare Tax:" + getMedicareTax(2500))

function getFederalTax(grossPay,WithCode){
if (WithCode === 0){
    aftTax  = grossPay*0.23;
}
else if (WithCode =1){
    aftTax = grossPay*0.21;
}
else if (WithCode = 2){
    aftTax = grossPay*0.195
}
else if(WithCode = 3){
    aftTax = grossPay*0.185
}
else if (WithCode = 4){
    aftTax = grossPay*0.18 
}

    let taxWithAmnt  = aftTax;
    
    return taxWithAmnt
}

console.log("Fedral Tax Witheld:" + getFederalTax(2500,0))