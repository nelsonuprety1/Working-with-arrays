'use strict';

//Flat 
// The arr.flat() method was introduced in ES2019.
//  It is used to flatten an array, to reduce the nesting of an array.
const arr = [[1,2,3], [4,5,6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1,2],3], [4,[5,6]], 7, 8];
// arr.flat([depth])
// depth levels flat than the original array,
//  it removes nesting according to the depth levels.
console.log(arrDeep.flat(2));

// flatMap method combines a flat and a map method into just one method
// flatMap
const overalBalance2 = accounts
// flatMap goes one level deep only
.flatMap(acc => acc.movements)
.reduce((acc, mov) => acc + mov, 0);