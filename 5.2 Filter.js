'use strict';
// 2) Filter
// -- Is used to filter for elements in the original array which satisfy a certain condition
// -- Filter returns a new array containing the array elements that passed a specific test condition

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

    // this callback function will get the current array element as an argument
const deposits = movements.filter(function(mov,i,array){
    return mov > 0;
})
console.log(movements);
console.log(deposits);

// for of
// const depositsFor = []
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

const withdrawals = movements.filter(function(mov,i,array){
    return mov < 0;
})
console.log(movements);
console.log(withdrawals);