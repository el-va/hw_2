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




// // 2.3 Условное ветвление

// // Задание 1

// let password = 'пароль';
// let askPassword = prompt('Введите пароль');

// if (askPassword === password) {
//     alert('Пароль введен верно');
// } else {
//     alert('Пароль введен неправильно');
// }

// // Задание 2

// let a = 5;

// (a >= 0 && a <= 10) ? console.log('Верно') : console.log('Неверно');

// // Задание 3

// let d = 55;
// let e = 105;

// (d >= 100 || e >= 100) ? console.log('Верно') : console.log('Неверно');

// // Задание 4

// let b = '2';
// let c = '3';

// alert(Number(b) + Number(c));

// // Задание 5

// let monthNumber = 12;
// let month = Number(prompt('Введите номер месяца'));

// if (isNaN(month)) {
//     alert('Введено не числовое значение');
// } else {
//     switch (month) {
//         case 12:
//         case 1:
//         case 2:
//             alert('Зима');
//             break;
//         case 3:
//         case 4:
//         case 5:
//             alert('Весна');
//             break;
//         case 6:
//         case 7:
//         case 8:
//             alert('Лето');
//             break;
//         case 9:
//         case 10:
//         case 11:
//             alert('Осень');
//             break;
//         default: alert('Номер месяца больше 12');
//             break;
//     }
// }

// // Задание 6
// // Добавлен адаптив по макету к разрешению 375px

// // Доп.задание 7

// let num = Number(prompt('Пожалуйста, введите любое число'));

// if (isNaN(num)) {
//     alert('Введено не числовое значение')
// } else {
//     if (num % 2 === 0) {
//         alert('четное');
//     } else {
//         alert('нечетное');
//     }   
// }

// // Доп.задание 8

// let clientsOS = Number(prompt('Выберите Вашу операционную систему: 0 - iOS, 1 - Android'));

// if (clientsOS === 0) {
//     confirm('Установите версию приложения для iOS по ссылке');
// } else if (clientsOS === 1) {
//     confirm('Установите версию приложения для Android по ссылке');
// } else {
//     prompt('Пожалуйста, введите корректное значение: 0 - iOS, 1 - Android')
// }

// // Доп.задание 9

// let clientOS = Number(prompt('Выберите Вашу операционную систему: 0 - iOS, 1 - Android'));

// let clientDeviceYear = 2015;

// let clientDevice = Number(prompt('Введите год Вашего устройства'));

// if (clientOS === 0 && clientDevice >= clientDeviceYear) {
//     alert('Установите версию приложения для iOS по ссылке');
// } else if (clientOS === 0 && clientDevice < clientDeviceYear) {
//     alert('Установите облегченную версию приложения для iOS по ссылке');
// } else if (clientOS === 1 && clientDevice >= clientDeviceYear) {
//     alert('Установите версию приложения для Android по ссылке');
// } else if (clientOS === 1 && clientDevice < clientDeviceYear) {
//     alert('Установите облегченную версию приложения для Android по ссылке');
// }


// 2.4 Циклы

// Задание 1

// do {
//     console.log('Привет');
//     console.log('Привет');
//   } while(false);

// или

// for (let i = 0; i < 2; i++) {
//     console.log('Привет!');
// };

// Задание 2

// let a = 1;
// do {
//     console.log(a);
//     a++;
// } while (a < 6);

// или

// for (let a = 1; a < 6; a++) {
//     console.log (a);
// }

// Задание 3

// let b = 7;
// do {
//     console.log(b);
//     b++;
// } while (b < 23);

// или

// for (let b = 7; b < 23; b++) {
//     console.log (b);
// }

// Задание 4

// let obj = {
//     'Коля' : '200',
//     'Вася' : '300',
//     'Петя' : '400',
// }

// for (let name in obj) {
//     console.log(name + ' - зарплата ' + obj[name] + ' долларов');
// }

// Задание 5

// let n = 1000, num = 0;
// while (n >= 50) {
//     n = n / 2;
//     num++;
// }
// console.log('Итераций: ' + num + ', результат деления = ' + n);

//  Задание 6

// for (let dayNumber = 1; dayNumber <= 31; dayNumber++) {
//     if (dayNumber % 7 == 0) {
//         console.log('Сегодня пятница, ' + dayNumber + '-е число. Необходимо подготовить отчет.');
// }
// }


// 2.5 Функции

// Задание 1

// function minNum(a, b) {
//     return a < b ? a : b;
//   }

// console.log(minNum(8, 4));
// console.log(minNum(6, 6));

// Задание 2

// function evenAndOdd(a) {
//     return a  % 2 === 0 ? 'Число четное' : 'Число нечетное';
// }

// console.log(evenAndOdd(5));

// Задание 3

// 3.1

// let square = (a) => a * 2;
// console.log(square(2));

// 3.2

// function number(num) {
//     return num * 2;
// }
// console.log(number(2));

// Задание 4

// function userAge() {
//     let askUserAge = Number(prompt('Сколько вам лет?'));
//     if (isNaN(askUserAge)) {
//         alert('Вы ввели неправильное значение');
//     } else {
//         if (askUserAge <= 12) {
//             alert('Привет, друг!');
//         } else {
//             alert('Добро пожаловать!');
//         }
//     }
// }

// userAge();

// Задание 5

// let correctNumber = () => {
//     let a = prompt('Введите первое число');
//     let b = prompt('Введите второе число');
//     let result;
//     if (!isNaN(a) && !isNaN(b)) {
//         result = a * b;
//     } else {
//         result = 'Одно или оба значения не являются числом';
//     } 
//     return result;
// }
// console.log(correctNumber());

// Задание 6

// let askU = Number(prompt('Введите число'));
// let result;
// let cubeNum = () => {
// if (!isNaN(askU) && askU != '' && askU != null) {
//     let cube = askU * 3;
//     result = `${askU} в кубе равняется ${cube}`
// } else {
//     result = `Переданный параметр не является числом`;
// }
// return result;
// }
// console.log(cubeNum());

// Задание 7

// function getArea() {
//     return Math.PI * this.radius * this.radius;
// }

// function getPerimeter() {
//     return 2 * Math.PI * this.radius;
// }

// const circle1 = {
//     radius: 4,
//     getArea: getArea,
//     getPerimeter: getPerimeter,
// }

// const circle2 = {
//     radius: 7,
//     getArea: getArea,
//     getPerimeter: getPerimeter,
// }

// console.log(circle1.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getArea());
// console.log(circle2.getPerimeter());

// Задание 8 

// let monthNum = prompt('Введите число от 1 до 12');
// let month = parseInt(monthNum, 12);
// if (month) {
//     if (month === 12 || month === 1 || month === 2) {
//         alert('Зима');
//     }
//     else if (month === 3 || month === 4 || month === 5) {
//         alert('Весна');
//     }
//     else if (month === 6 || month === 7 || month === 8) {
//         alert('Лето');
//     }
//     else if (month === 9 || month === 10 || month === 11) {
//         alert('Осень');
//     }
//     else {
//         alert('Введите число от 0 до 12');
//     }
// } else {
//     alert('Введите число от 0 до 12');
// }