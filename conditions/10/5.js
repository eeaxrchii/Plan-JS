// Задача 30.5
 
// Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

let num = 534;
let first = String(num)[0];
let second = String(num)[1];
let thrid = String(num)[2];

console.log(parseInt(first) + parseInt(second) + parseInt(thrid));