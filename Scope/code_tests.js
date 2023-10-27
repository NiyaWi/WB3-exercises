'use strict';

function test1(){
    let a = 10;
    if (a > 5){
        a = 7;
    }
    console.log("a = " + a)
}
test1();

function test2a(){
    if (1 ===1){
        var a = 5;
    }
    console.log("a = " + a);
}
test2a();

function test2b(){
    if (1 ===1){
        let a = 5;
    }
    console.log("a = " + a);
}
test2b();



