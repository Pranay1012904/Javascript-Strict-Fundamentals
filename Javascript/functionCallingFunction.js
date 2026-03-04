"use strict";

const juicer = (apple, orange) => {
  const applePieces = slicer(apple);
  const orangePieces = slicer(orange);
  return `Juice prepared with ${applePieces} Apples and ${orangePieces} Oranges!`;
};

const slicer = (fruit) => fruit * 4;

const juice = juicer(2, 4);
console.log(juice);
