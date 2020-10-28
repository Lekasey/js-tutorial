// Задача 3
// jqueryismyjam
const userPassword = 'jqueryismyjam';

const ADMIN_PASSWORD = 'jqueryismyjam';

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let message;

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

if (userPassword === ADMIN_PASSWORD) {
    console.log(message = ACCESS_IS_ALLOWED);
}
else if (userPassword === null) {
    console.log(message = CANCELED_BY_USER);
}
else
//  if (userPassword !==ADMIN_PASSWORD) 
 {
    console.log(message = ACCESS_DENIED);
}
// правильный ответ

console.log('userPassword: ',userPassword);
console.log('Message: ',message);