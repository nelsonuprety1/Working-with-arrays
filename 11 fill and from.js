"use strict";
// creating new arrays programmatically
// empty arrays + fill method
const x = new Array(7);
console.log(x);

x.fill(1);
// start at index 3
x.fill(1, 3);
console.log(x);

const a = [1, 2, 3, 4, 5, 6, 7, 8];
a.fill(22, 2, 6);
console.log(a);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

// _ throwaway variable
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// random dice rolls
const dice = Array.from(
  { length: 100 },
  (_, i) => Math.floor(Math.random(i) * 6) + 1
);
console.log(dice);

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("€", ""))
  );

  console.log(movementsUI);
});
