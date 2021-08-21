// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let nums = 0;
while (nums <= 100) {
  let check = true;
  for (let i = 2; i < nums; i++) {
    if (nums % i === 0) {
      check = false;
      break;
    }
  }
  if (check) console.log(nums);
  nums++;
}
//2 С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
var tovar = [3250, 2100, 5, 6];
function countBasketPrice(tovar) {
  var sum = 0;
  for (var i = 0; i < tovar.length; i++) {
    sum += tovar[i];
  }
  console.log(sum);
}
countBasketPrice(tovar);

//3 Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

//a
var tovary = [
  { name: 'Молоко', price: 65 },
  { name: 'Кетчуп', price: 50 },
  { name: 'Кефир', price: 75 }
];
tovary.map(item => item.price)
  .filter((value, index, self) => self.indexOf(value) === index)

//b Первый вариант
var tovar = [3250, 2100, 5, 6];
function countBasketPrice(tovar) {
  var sum = 0;
  for (var i = 0; i < tovar.length; i++) {
    sum += tovar[i];
  }
  console.log(sum);
}
countBasketPrice(tovar);

//b Второй вариант 
var tovary = [
  { name: 'Молоко', price: 65 },
  { name: 'Кетчуп', price: 50 },
  { name: 'Кефир', price: 75 }
];
function countBasketPrice(tovary) {
  var sum = 0;
  for (var i = 0; i < tovary.length; i++) {
    sum += tovary.map(item => item.price)
      .filter((value, index, self) => self.indexOf(value) === index);
  }
  console.log(sum);
}
countBasketPrice(tovary);

// Правильно ли сделал? Или надо сделать одну переменную товары?
//Если да , то как доставать значения из словаря по ключу? Потому что во втором варианте
// вывод такой : 065,50,7565,50,7565,50,75





