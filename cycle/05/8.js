// Задача 39.8

// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

let arr = [ 1, 2, 3, 4, 5 ];

let result = 0;

for( let i = 0; i < arr.length; i++){
    result = (result + arr[i]) / arr.length;
}

console.log(result);