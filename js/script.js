'use strict';

// let age;
// const yearOfBirth = 2006;
// const hotelName = prompt('Type name of Hotel');
// const value = prompt('Number of room you desire');
// const x = 5;
// const y = 10;
// const z = 5;

// let type;
// const age = 20;

// if (age >= 18) {
//   type = 'adult';
// } else {
//   type = 'child';
// }

// const age = 20;
// const type = age >= 18 ? 'adult' : 'child';

// const num1 = 5;
// const num2 = 10;
// let biggerNumber;

// if (num1 > num2) {
//   biggerNumber = num1;
// } else {
//   biggerNumber = num2;
// }


// const num1 = 5;
// const num2 = 10;
// const biggerNumber = num1 > num2 ? num1 : num2;

// let cost;
// const subscription = 'pro';

// switch (subscription) {
//   case 'free':
//     cost = 0;
//     break;

//   case 'pro':
//     cost = 100;
//     break;

//   case 'premium':
//     cost = 500;
//     break;

//   default:
//     console.log('Invalid subscription type');
// }

// 500

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let password = '';

// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);


// Задача 2
// const invoice = 150; 
// const stock = 100;
// let message
// if (invoice === 50) {
//     message = 'Заказ оформлен, с вами свяжется менеджер';
// }
// else if (invoice === 100) {
//     message = 'Заказ оформлен, с вами свяжется менеджер';
// }
// else if (invoice === 150) {
//     message = 'На складе недостаточно товаров!';
// }

// Задача 3
// jqueryismyjam
// const userPassword = '1';

// const ADMIN_PASSWORD = 'jqueryismyjam';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message;
// const value = prompt ('Введите пароль')
// if (value === ADMIN_PASSWORD) {
//     console.log(message = ACCESS_IS_ALLOWED);
// }
// else if (value === null) {
//     console.log(message = CANCELED_BY_USER);
// }
// else if (value !==ADMIN_PASSWORD) {
//     console.log(message = ACCESS_DENIED)
// }
// сверху вариант 1. с промпт



// if (userPassword === ADMIN_PASSWORD) {
//     console.log(message = ACCESS_IS_ALLOWED);
// }
// else if (userPassword === null) {
//     console.log(message = CANCELED_BY_USER);
// }
// else if (userPassword !==ADMIN_PASSWORD) {
//     console.log(message = ACCESS_DENIED)
// }
// правильный ответ

// задача 4
// const orderPieces = 4;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_DENIED = 'Недостаточно средств на счету!';

// let totalPrice = (orderPieces * pricePerDroid); // Write code on this line
// let balanceCredit = (credits - totalPrice); // Write code on this line
// let message;
// if (balanceCredit === null) {
//     message = CANCELED_BY_USER;
// }
// else if (totalPrice <= credits) {
//     message = `Вы купили ${orderPieces} дроидов, на счету осталось ${credits - totalPrice} кредитов`;
// }
// else if (totalPrice > credits) {
//     message = ACCESS_DENIED;
// }
// console.log(message);

// Задача 5
// const countryName = 'Китай';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
// const CHINA = 'Китай';
// const AUSTRALIA = 'Австралия';
// const INDIA = 'Индия';
// const JAMAICA = 'Ямайка';
// let message;
// let price = 0;
// let country;
// if (countryName === null) {
//   message = CANCELED_BY_USER;
// } 
// else {
//   country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); 
//   switch (country) {
//     case 'Австралия':
//         price = 170;
//         message = `Доставка в ${country} будет стоить ${price} кредитов`;
//         break;
//     case 'Китай': 
//         price = 100;
//         message = `Доставка в ${country} будет стоить ${price} кредитов`;
//         break;
//     case 'Индия':
//         price = 80;
//         message = `Доставка в ${country} будет стоить ${price} кредитов`;
//         break;
//     case 'Ямайка':
//         price = 120;
//         message = `Доставка в ${country} будет стоить ${price} кредитов`;
//         break;
//     default:
//         message = `В выбранную страну доставка недоступна.`
//   }
// }
// console.log(message);

