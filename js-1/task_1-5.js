// Задача 5
const countryName = 'ЯмайКа';

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} 
else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); 
  switch (country) {
    case AUSTRALIA:
        price = 170;
        message = `Доставка в ${country} будет стоить ${price} кредитов`;
        break;
    case CHINA: 
        price = 100;
        message = `Доставка в ${country} будет стоить ${price} кредитов`;
        break;
    case INDIA:
        price = 80;
        message = `Доставка в ${country} будет стоить ${price} кредитов`;
        break;
    case JAMAICA:
        price = 120;
        message = `Доставка в ${country} будет стоить ${price} кредитов`;
        break;
    default:
        message = NO_DELIVERY;
  }
}
console.log(message);