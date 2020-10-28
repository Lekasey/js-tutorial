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

// const array = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']
// let number = [1,2,3,4,5,6]
// for(array;;) 
// let arrayItem = array.slice([1])
// for (let number = 1; number <= 6 ;number++) {
//     const getItemString = `${number} - ${arrayItem}\n`;
//     console.log(getItemString);
//     console.log(number);
// }
// console.log('Массив: ', array);

// console.log(array.length);
// console.log(number);

// const array = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']
// console.log(array);
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);
// console.log(array[4]);
// console.log(array[5]);
// const array = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']

// const arrayNumber = [1,2,3,4,5,6]
// let result;
// let item
// const getItemsString = function(array)
// {    'use strict';
// let i = 0;
// for (item of array) {
// //     console.log('before')
// //    console.log(`${i+=1} - ${item}`);
// // console.log('after')  
// }

//   return result = join(' - ') arrayNumber+array
//   }
//   `${i+=1} - ${array[0]}\n
//   ${i+=1} - ${array[1]}\n
//   ${i+=1} - ${item}\n
//   ${i+=1} - ${item}\n
//   ${i+=1} - ${item}\n
//   ${i+=1} - ${item}\n`
// }
// console.log(getItemString);
// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
// console.log(getItemsString([1,5,10]));
// console.log(getItemsString([23,25,235,25,124,123,41,51,51,51]))
// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {
//   /*
//    * На каждой итерации мы будем проверять совпадает ли элемент массива с
//    * именем клиента. Если совпадает то мы записываем в message сообщение
//    * об успехе и делаем break чтобы не искать дальше
//    */

//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   // Если они не совпадают то запишем в resultMsg сообщeние об отсутсвии имени
//   message = 'Клиента с таким именем нету в базе данных!';
// }

// console.log(message); // Клиент с таким именем есть в базе данных!
// let result;
// const add = function(a, b, c) {
//     return a + b + c;
//     // result = a + b + c;
//   };
// const result = add(1,2,3);
// console.log(result)


// let stringItem;
// let result;
// const string = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']
// const getItemsString = function (array) {
//     for (stringItem of string) {
//         let i = 0;
//         // console.log(stringItem);
//         console.log(`${i+=1} - ${stringItem}`);
//           break;
//         }
// result = getItemsString(string)
// };
// console.log(getItemsString('Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'))
// console.log(result);
// console.log(string)
// let item
// const number = [1,2,3,4,5,6,7,8,9,10]
// console.log(number);
// const name = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
// console.log(name);
// const fx = function(array) {
//  for (let i=0; i < 10;) {
//      let x = i+=1
//  item =`${number[x]} - ${name[x]}\n`
   
//  }
//  return item 
// }
// const test = fx(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'])
// console.log(fx(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']))
// console.log(test)

// console.log('Этого сообщения не будет в консоли.');

// cos value = 5;


// const fn = (a, b, c) => a * b * c;
// console.log(fn(3,4,5))
// let item
// // console.log(item)
// // let y;
// const fn = function(array) {
//     let result;
//     for ( let item of array){
//        let number = [1,2,3,4,5,6]
//        let i= 0
//     //    i +=1
//        result=`
//        ${number[i]} - ${array[i]}\n`
//        console.log(item)
    
//     }
//     return result
// }
// console.log(fn(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']))

// const numbers = [1,2,3,4,5,6,7,8]
// let number
// let string = number + arrayItem;

// console.log(array)
/* не рабтающий for */
// for (let i = 0; i < array.lenght; i += 1) {
//     console.log('array item: ', array[i]);
// }
// console.log('Array: ', array)
const add = function(a, b, c) {
// const result = a + b + c;
return a + b + c
// console.log(result)
}
console.log(add(1, 2, 3))

const join = function (array) {
    const result = array.join('-')
    console.log(result)
}
console.log(join([1,2,3,4,5,6,7]))