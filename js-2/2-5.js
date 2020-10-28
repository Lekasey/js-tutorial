  /* Вариант через indexOF  - не проканало*/

// const message = 
// 'JavaScript weekly newsletter'
// 'Latest technology news'
// 'Get best sale offers now!'
// '[SPAM] How to earn fast money?'

// console.log(message)
// function checkForSpam (message) { 
//     'use strict';
// let result
//     let spam = 'spam'
//     let sale = 'sale'
//     let normalaized = message.toLowerCase()
//     if (normalaized.indexOf(spam) !== -1) {
//     result = true
    // console.log(result)
//     }
// else if(normalaized.indexOf(sale) !== -1){
//     result = true
    // console.log(result)
// }
// else {
//     result = false
    // console.log(result)
// }
    
//     return result
//   }
  
//   console.log(checkForSpam('Latest technology news')); // false
  
//   console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
//   console.log(checkForSpam('Get best sale offers now!')); // true
  
//   console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

  /* Вариант через includes */
//   const message = 
// 'JavaScript weekly newsletter'
// 'Latest technology news'
// 'Get best sale offers now!'
// '[SPAM] How to earn fast money?'

function checkForSpam (message) { 
    'use strict';
    // let result
    let spam = 'spam'
    let sale = 'sale'
    let normalaized = message.toLowerCase()
    if (normalaized.includes(spam) || normalaized.includes(sale)) {
    return true
    // console.log(result)
    }
// else if(normalaized.includes(sale)){
//     result = true
//     console.log(result)
// }
else {
    return false
    // console.log(result)
}
}


  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

 /* Задача 2-5
Функция предикат
Функция предикат возвращает true или false

Напиши функцию checkForSpam(message), принимающую 1 параметр message - 
строку. Функция проверяет ее на содержание слов spam и sale. Если нашли 
запрещенное слово то функция возвращает true, если запрещенных слов нет 
функция возвращает false. Слова в строке могут быть в произвольном регистре.*/