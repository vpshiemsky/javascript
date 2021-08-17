//1

// var a = 1, b = 1, c, d;
// 1)c = ++a; alert(c);           // 2
// 2)d = b++; alert(d);           // 1
// 3)c = (2 + ++a); alert(c);      // 5
// 4)d = (2 + b++); alert(d);      // 4
// 5)alert(a);                    // 3
// 6)alert(b);                    // 3
// Почему код даёт именно такие результаты ?

c = 1 + 1 //2
d = b //1
c = (2 + (1 + 2)) //5
d = (2 + (1 + 1)) //4
alert(a);   // 3     в 1 примере а=2 и после 3 примера а стало 3
alert(b);   // 3     во 2 примере b=2 и после 4 примера b стало 3
//2 Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
// Ответ будет 5 тк  a= a*2 =4 и 4+1=5

//3 Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом

let a = 5
let b = 3

if (a > 0, b > 0) {
  x = a - b
  console.log(x)
} else if (a < 0, b < 0) {
  x = a * b
  console.log(x)
} else if (a < 0, b > 0 || a > 0, b < 0 || a < 0, b == 0 || a == 0, b < 0) {
  x = a + b
  console.log(x)
}
//4 Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

let a = 13;
switch (a) {
  case 1:
    alert('Ваше число 1');
    break;
  case 2:
    alert('Ваше число 2');
    break;
  case 3:
    alert('Ваше число 3');
    break;
  case 4:
    alert('Ваше число 4');
    break;
  case 5:
    alert('Ваше число 5');
    break;
  case 6:
    alert('Ваше число 6');
    break;
  case 7:
    alert('Ваше число 7');
    break;
  case 8:
    alert('Ваше число 8');
    break;
  case 9:
    alert('Ваше число 9');
    break;
  case 10:
    alert('Ваше число 10');
    break;
  case 11:
    alert('Ваше число 11');
    break;
  case 12:
    alert('Ваше число 12');
    break;
  case 13:
    alert('Ваше число 13');
    break;
  case 14:
    alert('Ваше число 14');
    break;
  case 15:
    alert('Ваше число 15');
    break;
}
// 5 Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return
let a = 3
let b = 4

function summ(a, b) {
  return a + b
}

function min(a, b) {
  return a - b
}

function umn(a, b) {
  return a * b
}

function del(a, b) {
  return a / b
}
//6 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.
// В зависимости от переданного значения операции выполнить
// одну из арифметических операций(использовать функции из пункта 3) и вернуть полученное значение(использовать switch).
let arg1 = 2
let arg2 = 7

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case 'сложение':
      return arg1 + arg2
      break;
    case 'вычитание':
      return arg1 - arg2
      break;
    case 'деление':
      return arg1 / arg2
      break;
    case 'умножение':
      return arg1 * arg2
      break;
  }
}
mathOperation(arg1, arg2, 'сложение')