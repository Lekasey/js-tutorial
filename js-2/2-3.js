function findLongestWord (string = "") {
    const words = string.split(' ');
    let message 
    let longestWord = words[0].length;

    for (let i = 0; i < words.length; i += 1) {        
        if (longestWord <= words[i].length) {
        longestWord = words[i].length
        message = words[i]
        }    
    }
        return message
}

  console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
  // 'jumped'
  
  console.log(findLongestWord('Google do a roll'));
  // 'Google'
  
  console.log(findLongestWord('May the force be with you'));
  // 'force'

  /* Задача 2-3
Поиск самого длинного слово в строке с пробелами
Напиши функцию findLongestWord(string = ""), которая принимает 
параметром произвольную строку (в строке будут только слова и 
пробелы) и возвращает самое длинное слово в этой строке. */