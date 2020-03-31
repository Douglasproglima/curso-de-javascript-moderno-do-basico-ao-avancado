/* DATAS */
const threeHours = 60 * 60 * 3 * 1000; //60 segundos * 60 segundos * 3 horas * 1000 segundos
const now = new Date(threeHours);
console.log(now);

//Ano, mes, dia, hora, minuto, segundo, milesegundo
const dateParam = new Date(2020, 2, 31, 14, 15, 32, 1000);
console.log(dateParam);

const dateString = new Date('2020-03-31 14:25:32');
console.log(dateString);
console.log('Dia: ', dateString.getDate());
console.log('Mês', dateString.getMonth()+1);
console.log('Ano: ', dateString.getFullYear());
console.log('Hora: ', dateString.getHours());
console.log('Minutos: ', dateString.getMinutes());
console.log('Segundos: ', dateString.getSeconds());
console.log('Milesegundos: ', dateString.getMilliseconds());
console.log('Dia da Semana: ', dateString.getDay()); //0 - Dom, 1 - Seg, 2 -Ter, 3 - Qua, 4 - Qui, 5 - Sex, 6 -Sab

dateNumber = Date.now();
dataAtual = Date(dateNumber);
console.log('Data Atual: ', dateFormatPtBR(dateString, true));

function dateFormatPtBR(date, is_showSeconds){
    const _day = zeroLeft(date.getDate());
    const _month = zeroLeft(date.getMonth()+1);
    const _year = date.getFullYear();
    const _hours = date.getHours();
    const _minutes = date.getMinutes();
    const _segunds = date.getSeconds();

    const result = is_showSeconds 
                    ? `${_day}/${_month}/${_year} ${_hours}:${_minutes}:${_segunds}` 
                    : `${_day}/${_month}/${_year} ${_hours}:${_minutes}`;

    return result;
}

function zeroLeft(num){
    return num >= 10 ? num : `0${num}`;
}