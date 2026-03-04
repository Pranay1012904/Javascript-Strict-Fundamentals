"use strict";
//Function Expression
const calcAge = function (birthYear) {
  return 2026 - birthYear;
};

const age = calcAge(1994);
console.log(`Your age is ${age}`);
