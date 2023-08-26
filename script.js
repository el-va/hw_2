// Задание 1

let a = 10;
alert(a);

let a = 20;
alert(a);

// Задание 2

let firstIphone = 2007
alert(firstIphone)

// Задание 3

let nameJScreator = ('Brendan Eich')
alert(nameJScreator)

// Задание 4

let b = 10;
let c = 2;
let resultPlus = b + c;
alert(resultPlus);
let resultMinus = b - c;
alert(resultMinus);
let resultMultyply = b * c;
alert(resultMultyply);
let resultDivide = b / c;
alert(resultDivide);

// Задание 5

let d = 2;
let resultDegree = 2 ** 5;
alert(resultDegree);

// Задание 6

let e = 9;
let f = 2;
let resultMod = 9 % 2;
alert(resultMod);

// Задание 7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

// Задание 8

let age = prompt('Сколько вам лет?');
alert(age);

// Задание 9.0

const user = {
    name: 'Имя',
    age: '20',
    isAdmin: true
}

// Задание 9.1

user["city of residence"] = 'City';

// Задание 9.2

user.age = 25

// Задание 9.3

delete user["city of residence"]

// Задание 9.4

let info = prompt('Какую информацию вы хотите узнать о пользователе?');
alert(user[info]);

// Задание 10

let info = prompt("Назовите ваше имя");
alert(`Привет, ${info}!`);