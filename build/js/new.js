"use strict";
//Literal types
let myName;
let useName;
useName = "jhon";
let multiply = function (c, d) {
    return c * d;
};
const printthis = (a) => {
    console.log(a);
};
//rest prarameters
const totalnumber = (...nums) => {
    return nums.reduce((prev, current) => prev + current);
};
//never types
const createError = (errMsg) => {
    throw new Error(errMsg);
};
//number or string
const numbertocheck = "sami";
const lengthof = numbertocheck.length;
//type casting or assertions
const addOrConcate = (numberOne, numberTwo, method) => {
    if (method === "add") {
        return numberOne + numberTwo;
    }
    return '' + numberOne + numberTwo;
};
