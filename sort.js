let friends = ['arina', 'dima', 'sasha', 'igor', 'max'];
let sorted = friends.sort();
console.log(sorted);    

let numbers = [5, 2, 8, 1, 9, 23, 13, 45];
let sortedNumbers = numbers.sort((a, b) => a - b);

console.log(sortedNumbers);

let sortedNumbers2 = numbers.sort((b, a) => b - a);
console.log(sortedNumbers2);

// ascending 

let numbers_asc = numbers.sort(function(a, b) {return a - b});
console.log(numbers_asc);

// descending

let numbers_desc = numbers.sort(function(a, b) {return b - a});
console.log(numbers_desc);
