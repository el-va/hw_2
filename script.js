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
//     if (isNaN(askUserAge) || askUserAge <= 0) {
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

// или

// let monthNum = prompt('Введите число от 1 до 12');
// let month = parseInt(monthNum, 12);
// if (month) {
//     if (month === 12 || month === 1 || month === 2) {
//         alert('Зима');
//     }
//     else if (month >= 3 && month <= 5) {
//         alert('Весна');
//     }
//     else if (month >= 6 && month <= 8) {
//         alert('Лето');
//     }
//     else if (month >= 9 && month <= 11) {
//         alert('Осень');
//     }
//     else {
//         alert('Введите число от 0 до 12');
//     }
// } else {
//     alert('Введите число от 0 до 12');
// }


// Связываем сайт с первой игрой

function letsPlayButton() {
    confirm('Запускаю игру!')
}


// 2.6 Массивы

// Задание 1

// const num = [1, 5, 4, 10, 0, 3];

// for (let a = 0; a < num.length; a++) {
//   if (num[a] === 10) break;
//   console.log(num[a]);
// }

// или, если нужно чтобы 10 тоже вывелась в консоль:

// const num = [1, 5, 4, 10, 0, 3];

// for (let a = 0; a < num.length; a++) {
//   if (num[a] === 0) break;
//   console.log(num[a]);
// }

// или

// const num = [1, 5, 4, 10, 0, 3];

// for (let number of num) {
//   console.log(number);
//     if (number === 10) {
//     break;
//   }
// }

// Задание 2

// const num = [1, 5, 4, 10, 0, 3];

// num.forEach((el, index) => {
//   if (el === 4) {
//   console.log(`Индекс числа ${el}: ${index}`)
//   }
// });

// Задание 3

// let num = [1, 3, 5, 10, 20];

// num = num.join(' ');
// console.log(num);

// Задание 4

// let arr = [];

// for (let a = 0; a < 3; a++) {
// 	arr[a] = [1, 1, 1];
// }

// console.log(arr);

// // ---

// let arr = [];

// for (let a = 0; a < 3; a++) {
//   arr[a] = [];
//   for (let b = 0; b < 3; b++) {
// 		arr[a].push(b + 1);
// 	}
// }
// console.log(arr);

// Задание 5

// let num = [1, 1, 1];
// num.push(2, 2, 2);
// console.log(num);

// Задание 6

// let num = [9, 8, 7, 'a', 6, 5];
// num.sort();
// num.pop();
// console.log(num);

// Задание 7

// let num = [9, 8, 7, 6, 5];

// let askNum = Number(prompt('Угадай число'));
// if (isNaN(askNum) || askNum == '' || askNum == null) {
//   alert('Не число');
// } else {
//   if (askNum = num.includes(askNum)) {
//   alert('Угадал');
// } else {
//   alert('Не угадал');
// }
// }

// Задание 8

// function reverseStr(str) {
//     return str.split("").reverse().join("");
// }

// console.log(reverseStr('abcdef'));

// Задание 9

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let result = [...arr1, ...arr2];
// console.log(result);

// Задание 10

// let arr = [5, 1, 3, 7, 2];

// for (let i = 0; i < arr.length - 1; i++) {
//     let result = arr[i] + arr[i + 1];

// 	console.log(result);
// }

// Задание 11

// const nums = [2000, 500, 30];
// let result = nums.map(item => (item * 2));
// console.log(result);

// Задание 12

// const getLengthWords = result => result.map(str => str.length);

// console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));

// Задание 13

// const arr = [-1, 0, 5, -10, 56]; 
// const result = arr.filter(item => item < 0); 
// console.log(result);

// const arr = [-25, 25, 0, -1000, -2]; 
// const result = arr.filter(item => item < 0); 
// console.log(result);


// 2.7 Встроенные объекты

// Задание 1

// console.log("js".toUpperCase());

// Задание 2

// const item = ['Кошка', 'Кит', 'Комар', 'Носорог'];
// const search = 'ко';
// item.forEach((item) => {
//   if (item.toLowerCase().includes(search.toLowerCase())) {
//     console.log(item);
//   }
// });

// используя startsWith()

// const item1 = ['Кошка', 'Кит', 'Комар', 'Носорог'];
// item.forEach((item1) => {
//   if (item1.toLowerCase().startsWith("ко"))  {
//     console.log(item1);
//   }
// });

// 

// const item2 = ['яблоко', 'груша', 'гриб', 'огурец'];
// const search2 = 'гру';
// item2.forEach((item2) => {
//   if (item2.toLowerCase().includes(search2.toLowerCase())) {
//     console.log(item2);
//   }
// });

// 

// const item3 = ['Дом', 'Банк', 'Больница', 'Театр'];
// const search3 = 'Кино';
// item3.forEach((item3) => {
//   if (item3.toLowerCase().includes(search3.toLowerCase())) {
//     console.log(item3);
//   }
// });

// Задание 3

// console.log(x = Math.floor(32.58884));
// console.log(x = Math.round(32.58884));
// console.log(x = Math.ceil(32.58884));

// Задание 4

// console.log(Math.min(52, 53, 49, 77, 21, 32));
// console.log(Math.max(52, 53, 49, 77, 21, 32));

// Задание 5

// function getRandomA(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let randomInt = getRandomA(1, 10);
// console.log(randomInt);

// Задание 6

// function getRandomArrNumbers(length = 7) {
//     length = Math.floor(length / 2);
//     return Array.from(Array(length), () => Math.floor(Math.random() * 7) + 1);
//   };
//   const randomNum = getRandomArrNumbers();
//   console.log(randomNum);

//   

  // function getRandomArrNumbers2(length = 12) {
  //   length = Math.floor(length / 2);
  //   return Array.from(Array(length), () => Math.floor(Math.random() * 12) + 1);
  // };
  // const randomNum2 = getRandomArrNumbers2();
  // console.log(randomNum2);

// Задание 7

// function getRandomB(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
//   }
//   console.log(getRandomB(11, 55));

//   Задание 8

// let currentDate1 = new Date();
// console.log(currentDate1);

// let myDate2 = new Date(1674220924819);
// console.log(myDate2);

// let myDate3 = new Date("9/11/2023");
// console.log(myDate3);

//  Задание 9

// const currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate);

// Задание 10 

// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

// let myDate = new Date();
// myDate.setDate(12);
// myDate.setMonth(8);
// myDate.setYear(2023);
// myDate.setHours(10);
// myDate.setMinutes(25);
// myDate.setSeconds(33);

// console.log(`Дата: ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} - ${days[myDate.getDay()]}`);
// console.log(`Время: ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`);

//  или в одну строку

// let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + ", " + days[myDate.getDay()] + ", " + 'Время: ' + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
// console.log(fullDate)

// Задание 11

// Связываем сайт со второй игрой

function letsPlayButtonSecond() {

    const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    alert(fruits.sort(() => Math.random() - 0.5));
    
    let userAsk = String(prompt('Чему равнялся первый элемент массива?'));
    let userAskSecond = String(prompt('Чему равнялся последний элемент массива?'));
    
    if (!isNaN(userAsk) || userAsk == '' || userAsk == null) {
      console.log('Введено некорректное значение');
    } else {
      if (userAsk.toLowerCase() === fruits[0].toLowerCase() && userAskSecond.toLowerCase() !== fruits[fruits.length - 1].toLowerCase() || userAsk.toLowerCase() !== fruits[0].toLowerCase() && userAskSecond.toLowerCase() === fruits[fruits.length - 1].toLowerCase()) {
        alert('Вы были близки к победе!');
      } else {
        if (userAsk.toLowerCase() === fruits[0].toLowerCase() && userAskSecond.toLowerCase() === fruits[fruits.length - 1].toLowerCase()) {
            alert('Поздравляю, вы правильно запомнили!');
        } else {
            alert('Увы, не угадали. Потренируйтесь еще!');
        }
      }
    }
}


// 2.8 Callback, setTimeout, setInterval

// Задание 1

let people1 = [
  {name: 'Глеб', age: 29},
  {name: 'Анна', age: 17},
  {name: 'Олег', age: 7},
  {name: 'Оксана', age: 47}
];

people1.sort(function (a, b) {
 if (a.age > b.age) {
   return 1;
 }
 if (a.age < b.age) {
   return -1;
 }
 return 0;
});

console.log(people1);

// Задание 2

function isPositive(num) {
  if (num >= 0) {
    return true;
  } else {
    return false;
  }
}

function isMale(sub) {
  if (sub.gender === 'male') {
    return true;
  } else {
    return false;
  }
}

function filter(arr, callback) {
  const newArr = [];
  for (let i of arr) {
    if (callback(i) === true) {
      newArr.push(i)
    }
  }
  return newArr;
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

// Задание 3

let currentDate = new Date();

let timerId = setInterval(() => console.log(currentDate), 3000);

setTimeout(() => {clearInterval(timerId); console.log('30 секунд прошло');}, 30000);

// Задание 4

function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

// 

// const delayForSecond = setTimeout(() => {
//   console.log('Привет, Глеб!')
// }, 1000);

// clearTimeout(delayForSecond);

// Задание 5

function delayForSecond(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда');
      if(cb) { 	cb(); }

  }, 1000)
}

function sayHi (name) {
  console.log(`Привет, ${name}!`);
}

function sayHi (name) {
  setTimeout(() => {
    console.log(`Привет, ${name}!`);   
  }, 1000)
}
  
delayForSecond(() => sayHi('Глеб'));