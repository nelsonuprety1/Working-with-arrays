'use strict';
// Data transformations : Map
// 1) Map
// -- The map method is yet another method that we can use to loop over arrays. Similar to forEach method
// -- Difference with forEach is that, map creates a brand new array based on the original array.
// -- So essentially the map method takes an array, loops over that array 
// and in each iteration it applys a callback function that we specify on our code to the current array element.
// -- It maps the value of original array to a new array. That's why this method is called map.
// -- It is extremely useful
// -- Map returns a new array containing the results of applying an operation on all original array elements

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// this callback function will get the current array element as an argument
// const movementsUsd = movements.map(function(mov){
// using arrow function
const movementsUsd = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUsd);

// so besides the current element we also get access to the current index as well as the whole array
const movementsDescription = movements.map((mov, i, arr) => {
    if (mov > 0) {
        return `Movement ${i + 1} : You deposited ${mov}`;
    } else {
        // Math.abs: The Math.abs() function returns the absolute value of a number. 
        // That is, it returns x if x is positive or zero, 
        // and the negation of x if x is negative.
        return `Movement ${i + 1} : You withdrew ${Math.abs(mov)}`;
        // its completely acceptable to have two return statements or even more in 
        // the same function as long as only one of them is executed. So in this case 
        // either one of the return statement is executed
    }
});
console.log(movementsDescription);





// forOf
// const movementsUSDfor = [];
// for(const mov of movements){
//     movementsUSDfor.push(mov * eurToUsd);
// }
// console.log(movementsUSDfor);