//#region Exemplo da vida Real - API Breakingbad
function contextMain(){
    const elements = [
        {tag: 'p', text: ''},
        {tag: 'div', text: ''},
        {tag: 'footer', text: ''},
        {tag: 'section', text: ''}
    ];

    const container = document.querySelector('.container');
    const div = document.createElement('div');
    container.appendChild(div);
    for (let index = 0; index < elements.length; index++) {
        let {tag, text} = elements[index];
        let element = document.createElement(tag);
        div.appendChild(element);
        text = `Frase ${index+1}`;


        element.innerText = text;   
    }
}
contextMain();
