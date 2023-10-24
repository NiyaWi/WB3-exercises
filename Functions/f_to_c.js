"use strict;"

function convertFtoC(Temp){


 let first = Temp - 32;
let celcius = first * 5 ;
let celciusTemp = celcius/9 ;
return celciusTemp;
}


console.log(convertFtoC(212));
