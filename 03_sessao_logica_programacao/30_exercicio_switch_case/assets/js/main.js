const dtNumber = Date.now();
const dateNow = new Date(dtNumber);
const daysOfWeekendList = [
    'Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabádo'
];
const monthsOfYearList = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

function getDayOfWeekend(date){
    date = ((date == undefined) || (date == null) || (isNaN(date))) ? 0 : date-1;
    if(date < 0) date = 0;
    if(date > 11) date = 11;

    return daysOfWeekendList[date];
}

function getMonthsOfYear(date){
    date = ((date == undefined) || (date == null) || (isNaN(date))) ? 0 : date-1;
    if(date < 0) date = 0;
    if(date > 11) date = 11;

    return monthsOfYearList[date];
}

function getTimePtBr(){
    let d = new Date(), displayDate;
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
        displayDate = d.toLocaleTimeString('pt-BR');
    else
        displayDate = d.toLocaleTimeString('pt-BR', {timeZone: 'America/Belem'});

    return displayDate;
}

function formatDateExtensionPtBr(date){
    const dayWeekend = getDayOfWeekend(date.getDay());
    const monthYear = getMonthsOfYear(date.getMonth());
    const yearFull = date.getFullYear();
    const time = getTimePtBr(date);    
    const dateExtesion = `${dayWeekend}, ${date.getDate()} de ${monthYear} de ${yearFull} ${time}`;

    return dateExtesion;
}

function formatDatePtBr(date, separator){
    return date.toISOString().substr(0, 10).split('-').reverse().join(separator);
}

/*function updateTimeForHTML(){
    const h3 = document.querySelector('.container h3');
    h3.innerHTML = `${formatDateExtensionPtBr(dateNow)}`;
}*/

/* TODA TRANQUEIRADA ACIMA PODE SER SUBSTUIDO POR: */
function getDateExtesionPtBr(options){
    let d = new Date(), displayDate;
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
        displayDate = d.toLocaleDateString('pt-BR');
    else
        displayDate = d.toLocaleDateString('pt-BR', options);

    return displayDate;
}

function getDateExtesionPtBr(date, options){
    let d = date, displayDate;
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)
        displayDate = d.toLocaleDateString('pt-BR');
    else
        displayDate = d.toLocaleDateString('pt-BR', options);

    return displayDate;
}

function updateTimeForHTML(){
    const h3 = document.querySelector('.container h3');
    const options = {
        dateStyle: 'full',
        timeStyle: 'short'
    };
    
    h3.innerHTML = `${getDateExtesionPtBr(dateNow, options)} ${getTimePtBr()}`;
    //h3.innerHTML = `${dateNow.toLocaleDateString('pt-BR', options)} ${getTimePtBr()}`;
}
var timeNow = setInterval(updateTimeForHTML, 1000);