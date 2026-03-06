"use strict";
const obj = {
  name: "Michel",
  job: "Teacher",
  birthYear: 1991,
  currentYear: 2026,
  hobbies: ["Music", "Gym", "Biking"],
  calcAge: function () {
    return this.currentYear - this.birthYear;
  },
};

console.log(`AGE :: ${obj.calcAge()}`);
/*
================================================================================
BMI CODING CHALLANGE
================================================================================
*/
var mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    const bmi = this.mass / (this.height * this.height);
    return bmi;
  },
};

var john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    const bmi = this.mass / (this.height * this.height);
    return bmi;
  },
};

mark.bmi = mark.calcBMI();
john.bmi = john.calcBMI();

if (mark.bmi > john.bmi) {
  //Mark Miller's
  console.log(
    `Mark Miller's BMI (${mark.bmi}) is higher than John Smith's (${john.bmi})!`,
  );
} else {
  console.log(
    `John Smith's BMI (${john.bmi}) is higher than Mark Miller's (${mark.bmi})!`,
  );
}
