'use strict';
// chaining all the map filter and reduce method together

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1
// we can only chain a method if first one returns an array
const totalDepositsUSD = movements
// the result of this first filter operation will be new array
    .filter(mov => mov > 0)
    .map(mov => mov * eurToUsd)
    // we could not chain a map or filter after reduce because it will return a  value
    .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

/*
const calcAverageHumanAge = function(ages){
    const humanAge = ages.map(age => age <= 2 ? 2 * age : 16 + age *4);
    const adults = humanAge.filter(age => age >= 18)
    console.log(humanAge);
    console.log(adults);

    const average = adults.reduce((acc,age) => acc + age,0) /adults.length;

    return average;
    
}
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
console.log(avg1, avg2);

*/
// const calcAverageHumanAge = (ages) => ages
// .map(age => age <= 2 ? 2 * age : 16 + age *4)
// .filter(age => age >= 18)
// .reduce((acc,age,i,arr) => acc + age /arr.length,0);