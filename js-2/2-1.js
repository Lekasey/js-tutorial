// const array = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
// const numbers = [1,2,3,4,5,6]
// let string;
// let result;
// const orderedArray = [];
// const getItemsString = function (array) {
// for ( let i = 0; i < array.length; i += 1) {

//     const arrayItem = array[i];
//     const number = numbers[i];
//     string = `${number} - ${arrayItem}\n`;

//     orderedArray.push(string)
//     }
//     result =  orderedArray.join('');
//     console.log(result)

// }
// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
// console.log(orderedArray)
// console.log(getStringItem([5,10,15]))
// console.log(result)
// console.log(array)

// let result
const getItemsString = function(array) {
    'use strict';
   
    const numbers = [1,2,3,4,5,6]
    const orderedArray = [];
  
    for ( let i = 0; i < array.length; i += 1) {
      // const arrayItem = array[i];
      // const number = numbers[i];
      let string = `${numbers[i]} - ${array[i]}\n`;
      orderedArray.push(string)
      }
      return orderedArray.join('')
  };
  console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
  console.log(getItemsString([1,3,5,7,9]))


/* Задача 2-1
Использование for
Напиши функцию getItemsString(array), которая получает массив и 
возвращает строку, полученную из объединения (конкатенации) строк 
в формате ${номер элемента} - ${значение элемента}\n , где \n - спецсимвол переноса.

Нумерация должна начинаться с 1. К примеру для первого элемента 
массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', 
а для индекса 2 выведет '3 - Ajax'.

Используйте вспомогательную переменную result для добавления (конкатенации) 
строк внутри цикла for.*/