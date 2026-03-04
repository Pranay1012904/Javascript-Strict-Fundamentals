"use strict";

const yearsTillRetirement = (birthYear, firstName) => {
  const age = 2026 - birthYear;
  const yearsTillRetirement = 65 - age;
  return `${firstName} retires in ${yearsTillRetirement} years!`;
};
const res = yearsTillRetirement(1991, "Jhon");
console.log(res);
