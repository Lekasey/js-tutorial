
function formatString (string, maxLength = 40) {
    // let result
    let number = string.length
    if (number > maxLength){
      return `${string.slice(0, maxLength)}...`        
    } 
    return string;
    
   
}
//   console.log('Curabitur ligula sapien, tincidunt non'.length)
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // 'Curabitur ligula sapien, tincidunt non.'
  
//   console.log('Vestibulum facilisis, purus nec pulvinar iaculis.'.length)
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // 'Vestibulum facilisis, purus nec pulvinar...'
//   console.log('Vestibulum facilisis, purus nec pulvinar...'.length)
  
//   console.log('Vestibulum facilisis, purus nec pulvinar iaculis.'.length)
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));

  /*Задача 2-4
Форматирование строки в зависимости от длинны строки
Напиши функцию formatString(string, maxLength = 40) которая 
принимает строку и форматирует ее если необходимо.

Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
Если длина больше maxLength, то функция обрезает строку до размера 
maxLength символов и добавляет в конец строки троеточие ..., после чего 
возвращает укороченную версию. */