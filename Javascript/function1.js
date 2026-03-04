"use strict";

function fruitJuicer(apples, oranges) {
  console.log(`${apples} Apples and ${oranges} oranges received.`);
  var product = `Juice with ${apples} Apples and ${oranges} Oranges prepared`;
  return product;
}

const product = fruitJuicer(2, 4);
console.log(product);
