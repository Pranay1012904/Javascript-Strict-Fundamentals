const calc = (bill) => {
  let tip = 0;
  if (bill >= 50 && bill <= 100) {
    tip = (15 * bill) / 100;
  } else {
    tip = (20 * bill) / 100;
  }
  return tip;
};

const bills = new Array(125, 555, 44);
debugger;
const tips = [calc(bills[0]), calc(bills[1]), calc(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log("BILLS:", bills);
console.log("TIPS", tips);
console.log("TOTALS", totals);
