const allLogins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
// const login = 'Zod'

// console.log(login.length)
// const min = 4
// const max = 16

function isLoginValid (login, min = 4, max = 16) {
    if (min <= login.length && login.length <= max) {
 return true
  } 
  return false
}
function isLoginUnique  (allLogins, login) {
  'use strict';
 if (!allLogins.includes(login)) {
     return true
 } 
  return false
}


  function addLogin(allLogins, login) {
    'use strict';
    const SUCCESS = 'Логин успешно добавлен!';
    const REFUSAL = 'Такой логин уже используется!';
    const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
    let result
    let min = 4
    let max = 16
    if(isLoginValid(login, min, max)) {
      if (isLoginUnique(allLogins, login)){
        allLogins.push(login);
      return result = SUCCESS
      }
      return result = REFUSAL
    }    
    // eslint-disable-next-line no-unused-vars
    return result = ERROR
}

  
  // console.log(isLoginUnique(allLogins, login))
//  console.log(isLoginValid(login))
console.log(addLogin(allLogins, 'Ajax')); 
  // 'Логин успешно добавлен!'
  
  console.log(addLogin(allLogins, 'robotGoogles')); 
  // 'Такой логин уже используется!'
  
  console.log(addLogin(allLogins, 'Zod'));
  // 'Ошибка! Логин должен быть от 4 до 16 символов'
  
  console.log(addLogin(allLogins, 'jqueryisextremelyfast')); 
  // 'Ошибка! Логин должен быть от 4 до 16 символов' 

/* Задача 2-9
Есть массив logins с логинами пользователей. Напиши скрипт 
добавления логина в массив logins. Добавляемый логин должен:

проходить проверку на длину от 4 до 16-ти символов включительно
быть уникален, то есть отсутствовать в массиве logins
Разбей задачу на подзадачи с помощью функций.
Проверку на отсутствие аргументов или на правильный тип аргументов делать не нужно.

Напиши функцию isLoginValid(login), в которой проверь количество 
символов параметра login и верни true или false в зависимости от того, 
попадает ли длина параметра в заданный диапазон от 4-х до 16-ти символов включительно.

Напиши функцию isLoginUnique(allLogins, login), которая принимает список 
всех логинов и добавляемый логин как параметры и проверяет наличие login 
в массиве allLogins, возвращая true если такого логина еще нет и false если 
логин уже используется.

Напиши функцию addLogin(allLogins, login) которая:

Принимает новый логин и массив всех логинов как параметры
Проверяет валидность логина используя вспомогательную функцию isLoginValid
Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку 
'Ошибка! Логин должен быть от 4 до 16 символов'
Если логин валиден, функция addLogin проверяет уникальность логина с помощью ф
ункции isLoginUnique
Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и 
возвращает строку 'Такой логин уже используется!'
Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и 
возвращает строку 'Логин успешно добавлен!'
🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. 
Это позволяет переиспользовать код и изменять логику работы функции только в одном 
месте, не затрагивая работу программы в целом.

Предикатные функции возвращают только true или false. Такие функции принято 
называть начиная с is: isLoginUnique и isLoginValid в нашем случае.

isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
isLoginValid только проверяет валидный ли логин и возвращает true или false.
addLogin добавляет или не добавляет логин в массив. При этом для проверок условия 
добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid.
*/