// Задача 30.4

// Дано трехзначное число. Найдите сумму цифр этого числа.

let num = 534;
let first = String(num)[0];
let second = String(num)[1];
let thrid = String(num)[2];

console.log(parseInt(first) + parseInt(second) + parseInt(thrid));