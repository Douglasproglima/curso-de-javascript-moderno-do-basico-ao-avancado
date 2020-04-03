function contextMain(){
    const styleBody = getComputedStyle(document.body);
    const backgroundColorBody = styleBody.backgroundColor;
    
    const h1 = document.querySelector('h1');
    h1.style.backgroundColor = 'rgba(38, 199, 9, 0.29)';

    const groupParagrafo = document.querySelector('.paragrafo');
    const paragrafos = groupParagrafo.querySelectorAll('p');

    paragrafos.forEach(function(paragrafo, index){
        if(index % 2 == 0) //Coloca cor em uma linha sim e outra não
            paragrafo.style.backgroundColor = backgroundColorBody;
    });
};
contextMain();