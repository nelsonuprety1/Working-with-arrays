'use strict';
// Data transformations : Map, filter, reduce 
// 3 big important array methods to perform data transformations
// these are methods that we use to create new arrays based on transforming data from other arrays

// 1) Map
// -- The map method is yet another method that we can use to loop over arrays. Similar to forEach method
// -- Difference with forEach is that, map creates a brand new array based on the original array.
// -- So essentially the map method takes an array, loops over that array 
// and in each iteration it applys a callback function that we specify on our code to the current array element.
// -- It maps the value of original array to a new array. That's why this method is called map.
// -- It is extremely useful
// -- Map returns a new array containing the results of applying an operation on all original array elements

// 2) Filter
// -- Is used to filter for elements in the original array which satisfy a certain condition
// -- Filter returns a new array containing the array elements that passed a specific test condition

// 3) Reduce
// -- Is used to boil down all the elements of the original array into one single value (adding all elements together)