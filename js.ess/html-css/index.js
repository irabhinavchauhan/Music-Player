"use strict";

function make_changes(a,b,c)
{
    a=5;
    b=[1,,3,5,7,9];
    c[0]=8;
}

let x=4;
let y=[2,4,6,8,10];
let z=[2,4,6,8,10];
make_changes(x,y,z);
document.write(x,y,z);