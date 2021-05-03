'use strict';
// For each method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for of 
console.log(`-------------ForOf-----------`);
for( const movement of movements ){
    if(movement > 0){
        console.log(`You deposited ${movement}`)
    }else{
        // Math.abs: The Math.abs() function returns the absolute value of a number. 
        // That is, it returns x if x is positive or zero, 
        // and the negation of x if x is negative.
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
}

console.log(`-------------ForEach-----------`);
// forEach
// forEach is a higher order function, which requires a callback function in order to tell it what to do

// so its the forEach method here that will call this callback function. we are not calling this ourselves

// But when exactly will forEach actually call this callback function?
// Well what the forEach method does is to loop over the arrau, and in each iteration it will execute this callback function below.
// Also as the forEach method call this callback function in each iteration it will pass in the current element of the array as an argument.
// so each time this callback function here is called, so in each iteration, it will receive the current element
// of the array as an argument. 

// to get access to the current index
// name doesnt matter but the order does.
// so here first parameter (movement) always needs to be the current element
// the second parameter (i) always the current index
// the third parameter (array) always the current array  
movements.forEach(function(movement, i, aray){
        if(movement > 0){
        console.log(`Movement ${i + 1} : You deposited ${movement}`)
    }else{
        // Math.abs: The Math.abs() function returns the absolute value of a number. 
        // That is, it returns x if x is positive or zero, 
        // and the negation of x if x is negative.
        console.log(`Movement ${i + 1} : You withdrew ${Math.abs(movement)}`);
    }
});
// this is what happened behind the scenes 0,1,2 iteration
// 0: function(200)
// 1: function(450)
// 2: function(400)
// So in this case we tell forEach that in each iteration it should log one of these two strings here to the console


// The main difference between forOf loop and forEach loop is that you cannot break out of forEach loop.
// so you cannot use continue and break statements. They donot work for forEach loop. So instead forEach will
// loop over the entire array and there is nothing you can do about it. So if you really need to break out of loop you need to use forOf loop