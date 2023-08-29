// // 2.2. Переменные. Типы данных

// // Задание 1

// let a = 10;
// alert(a);

// let aa = 20;
// alert(aa);

// // Задание 2

// let firstIphone = 2007
// alert(firstIphone)

// // Задание 3

// let nameJScreator = ('Brendan Eich')
// alert(nameJScreator)

// // Задание 4

// let b = 10;
// let c = 2;
// let resultPlus = b + c;
// alert(resultPlus);
// let resultMinus = b - c;
// alert(resultMinus);
// let resultMultyply = b * c;
// alert(resultMultyply);
// let resultDivide = b / c;
// alert(resultDivide);

// // Задание 5

// let d = 2;
// let resultDegree = 2 ** 5;
// alert(resultDegree);

// // Задание 6

// let e = 9;
// let f = 2;
// let resultMod = 9 % 2;
// alert(resultMod);

// // Задание 7

// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num += 1;
// num -= 1;
// alert(num);

// // Задание 8

// let age = prompt('Сколько вам лет?');
// alert(age);

// // Задание 9.0

// const user = {
//     name: 'Имя',
//     age: '20',
//     isAdmin: true
// }

// // Задание 9.1

// user["city of residence"] = 'City';

// // Задание 9.2

// user.age = 25

// // Задание 9.3

// delete user["city of residence"]

// // Задание 9.4

// // let info = prompt('Какую информацию вы хотите узнать о пользователе?');
// // alert(user[info]);

// // Задание 10

// let info = prompt("Назовите ваше имя");
// alert(`Привет, ${info}!`);




// 2.3 Условное ветвление

// Задание 1

let password = 'пароль';
let askPassword = prompt('Введите пароль');

password = password.toLocaleLowerCase

if (askPassword === 'пароль') {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

// Задание 2

let a = 5;

(a >= 0 && a <= 10) ? console.log('Верно') : console.log('Неверно');

// Задание 3

let d = 55;
let e = 105;

(d >= 100 || e >= 100) ? console.log('Верно') : console.log('Неверно');

// Задание 4

let b = '2';
let c = '3';

alert(Number(b) + Number(c));

// Задание 5

let monthNumber = 12;
let month = Number(prompt('Введите номер месяца'));

switch (month) {
    case 12:
    case 1:
    case 2:
        alert('Зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна');
        break;
    case 6:
    case 7:
    case 8:
        alert('Лето');
        break;
    case 9:
    case 10:
    case 11:
        alert('Осень');
        break;
    default: alert('Номер месяца больше 12');
        break;
}

// Задание 6
// Добавлен адаптив по макету к разрешению 375px

// Доп.задание 7

let num = prompt('Пожалуйста, введите любое число');

console.log(isNaN(num)); // проверка на нечисло

num % 2 === 0 ? alert('Число четное') : alert('Число нечетное'); // проверка на чет/нечет

// Доп.задание 8

let clientsOS = Number(prompt('Выберите Вашу операционную систему: 0 - iOS, 1 - Android'));

if (clientsOS === 0) {
    alert('Установите версию приложения для iOS по ссылке');
} else if (clientsOS === 1) {
    alert('Установите версию приложения для Android по ссылке');
} else {
    alert('Пожалуйста, введите корректное значение: 0 - iOS, 1 - Android');
    prompt('Выберите Вашу операционную систему: 0 - iOS, 1 - Android')
}

// Доп.задание 9

let clientOS = Number(prompt('Выберите Вашу операционную систему: 0 - iOS, 1 - Android'));

let clientDeviceYear = 2015;

let clientDevice = Number(prompt('Введите год Вашего устройства'));

if (clientOS === 0 && clientDevice >= 2015) {
    alert('Установите версию приложения для iOS по ссылке');
} else if (clientOS === 0 && clientDevice <= 2014) {
    alert('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientOS === 1 && clientDevice >= 2015) {
    alert('Установите версию приложения для Android по ссылке');
} else if (clientOS === 1 && clientDevice <= 2015) {
    alert('Установите облегченную версию приложения для Android по ссылке');
}