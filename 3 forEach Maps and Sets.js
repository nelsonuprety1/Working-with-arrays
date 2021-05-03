'use strict';

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);
// forEach on Map
currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
})

// forEach on Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
currenciesUnique.forEach(function(value, key, map){
    console.log(`${key}: ${value}`);
});

// why we got this kind of result from forEach on set
// USD: USD
//  GBP: GBP
//   EUR: EUR

// why is the key exact same as the value?
// -- well a set doesnt have keys. It doesnt have indexes either. And there is no value that would
// make sense for the key. This key here makes no sense at all
