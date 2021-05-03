// SOME: CONDITION
 const anyDeposits = movements.some(mov => mov > 1500)
 console.log(anyDeposits);

// EVERY 
 console.log(movements.every(mov => mov > 0))
 console.log(account4.movements.every(mov => mov > 0))

// separate callback
const deposit = mov => mov>0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));