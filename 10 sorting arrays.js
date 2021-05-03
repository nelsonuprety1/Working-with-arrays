'use strict';
// sorting arrays
// sorting array
// with strings
// it mutates the original array
const owners = ['Nelson', 'Eminem', 'Luffy', 'Naruto', 'Itadori'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);

// return < 0, A, B (keep order)
// return > 0 , B, A (switch order)
// ascending
// movements.sort((a, b) => {
//   if (a > b)
//   return 1;
//   if (b >a)
//   return -1;
// });
// same as above
movements.sort((a,b) => a - b);
console.log(movements);

// descending
// movements.sort((a, b) => {
//   if (a > b)
//   return -1;
//   if (b >a)
//   return 1;
// });
// same as above
movements.sort((a,b) => b - a);
console.log(movements);
// if there is mixed arrays with strings and numbers the sort method will not work.