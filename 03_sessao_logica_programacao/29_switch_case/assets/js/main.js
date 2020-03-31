const dtNumber = Date.now();
const dateNow = new Date(dtNumber);

console.log(getDayOfWeekend(dateNow.getDay()));

function getDayOfWeekend(dayWeekend) {
  switch (dayWeekend) {
    case 0:
      return "Domingo";
      break;
    case 1:
      return "Segunda-Feira";
      break;
    case 2:
      return "Terça-Feira";
      break;
    case 3:
      return "Quarta-Feira";
      break;
    case 4:
      return "Quinta-Feira";
      break;
    case 5:
      return "Sexta-Feira";
      break;
    case 6:
      return "Sabádo";
      break;
    default:
      return ""
      break;
  }
}
