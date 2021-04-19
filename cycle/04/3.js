// Задача 38.2

// Найдите сумму нечетных чисел от 1 до 99.

let result = 0;

for (let i = 1; i <= 99; i+=2) {
	result += i;
}

console.log(result); // искомая сумма