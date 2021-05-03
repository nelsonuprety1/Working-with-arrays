'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr = ['a','b','c','d','e'];
console.log(`-------Slice-----------`);

// Slice Method: With this method, we can extract part of any array but without changing the original array
// Slice method: DOESNT MUTATE THE ARRAY
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
// creating shallow copy of array
console.log(arr.slice());

// Splice method: this method works in almost the same way as slice method. But the fundamental difference is that 
// it does actually change the original array. It mutates that array
// SPLICE: MUTATES THE ARRAY
console.log(`-------Splice-----------`);
// console.log(arr.splice(2));

// one use case of splice method is to delete last element from an array
arr.splice(-1);
console.log(arr);

// we went to position one and deleted two elements. Second parameter is the number of elements we want to delete
arr.splice(1, 2);
// The extracted elements are gone from the original array. SO splice deleted them
console.log(arr);

// Reverse : MUTATES THE ARRAY. Used to reverse
console.log(`-------Reverse-----------`);
arr = ['a','b','c','d','e'];
const arr2 = ['j','i','h','g','f'];
console.log(arr2.reverse());

// reverse will mutate the array and original array is changed
console.log(arr2);

// CONCAT : DOESNT MUTATE
console.log(`-------CONCAT-----------`);
// So the first array(arr) will be the one on which the method is called. And the second one is the one that we pass into the concat method(arr2)
const letters = arr.concat(arr2);
console.log(letters);
// we could do this too
// console.log([...arr, ...arr2]);

// JOIN 
console.log(`-------JOIN-----------`);
console.log(letters.join(' - '));