// Задача 2
// ВАРИАНТ 1 ПО ТОЧКАМ 50-100-150
// const invoice = 100; 
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
// console.log('message: ', message);
// console.log('invoice: ', invoice);
// console.log('stock: ', stock);


// ВАРИАНТ 2 ТЕРНАРНЫЙ
const invoice = 99; 
let stock = 100;

const message = stock >= invoice ? 'Заказ оформлен, с вами свяжется менеджер' : 'На складе недостаточно товаров!';
console.log(message);
stock -= invoice;

console.log('message: ', message);
console.log('invoice: ', invoice);
console.log('stock: ', stock);
// console.log('Left at stock:', left);