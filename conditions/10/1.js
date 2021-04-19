// Задача 30.1

// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
let month = 12;


if(month > 0 && month <= 2 || month == 12){
    console.log('winter');
} else if( month >= 3 && month <=5){
  console.log('spring');
} else if (month >= 6 && month <=8 ){
  console.log('summer');
} else if (month >= 9 && month <= 11){
  console.log('autmn');
} else {
  console.log('Nan');
}