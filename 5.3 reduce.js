'use strict';
// 3) Reduce
// -- Is used to boil down all the elements of the original array into one single value (adding all elements together)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// the first argument in reduce method function is always the accumulator. It keeps
// accumulating the value that we ultimately want to return

const balance = movements.reduce(function(acc, cur, i, arr){
    console.log(`Iteration ${i}: ${acc}`);
    return acc + cur;
},0);
// the above callback function is the first argument in reduce method but the method has 
// second argument/parameter which is the initial value of accumulator (which in this is 0).
// so the value that we specify here 0 is the inital value of the accumulator in the first loop iteration
console.log(balance);

// Maximum value 
const max = movements.reduce((acc, mov) => {
    if(acc > mov)
    return acc;
    else
    return mov;
},movements[0]);
console.log(max);

// for of loop
// let balance2 = 0;
// for(const mov of movements) balance2 += mov;
// console.log(balance2)