'use strict'
//1  Написать функцию, преобразующую число в объект. 
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
// в котором в соответствующих свойствах описаны единицы, десятки и сотни.Например,
// для числа 245 мы должны получить следующий объект: { ‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2 }.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function NumtoObj(num) {
    if (num < 0 || num > 999) {
        console.log('Это число меньше 0 или больше 999');
    } else {
        let str = num.toString();
        let obj = {}
        let n = str.length
        switch (n) {
            case 3:
                obj['сотни'] = str[n - 3];
            case 2:
                obj['десятки'] = str[n - 2];
            case 1:
                obj['единицы'] = str[n - 1];
        }
    return obj
    }
}
console.log(NumtoObj(45));
//2 Продолжить работу с интернет-магазином:
// a) В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// b) Реализуйте такие объекты.
// c) Перенести функционал подсчета корзины на объектно-ориентированную базу.

function addToCart(arr, name , price , quantity , total) {
    arr.push({
        product: name,
        price: price,
        quantity: quantity,
        total: Sum
    });
}

var basket = [
    {product: 'Футболка',
    price: 1000,
    quantity: 1,
    total: Sum},
    {product: 'Шорты',
    price: 2500,
    quantity: 1,
    total: Sum},
    {product: 'Шапка',
    price: 1100,
    quantity: 3,
    total: Sum},
    {product: 'Носки',
    price: 350,
    quantity: 5,
    total: Sum},
]
function Sum() {
    return this.price * this.quantity;
}
function countBasket(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i].total();
    }
    return sum;
}
function describeBasket(arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        str += (i + 1) + '. ' + arr[i].product + ' - ' + arr[i].price + ' * ' + arr[i].quantity + ' = ' + (arr[i].total()) + '\n';
    }
    return str;
}

alert('В корзину добавлены следующие товары:\n' + describeBasket(basket) + '\nОбщая стоимость составляет: ' + countBasket(basket));