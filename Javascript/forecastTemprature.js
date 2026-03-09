"use strict";
const printForecast = function (arr) {
  var str = "";
  for (var i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in day ${i + 1}...`;
  }
  console.log(str);
};

printForecast(new Array(17, 21, 23));
printForecast(new Array(12, 5, -5, 0, 4));
