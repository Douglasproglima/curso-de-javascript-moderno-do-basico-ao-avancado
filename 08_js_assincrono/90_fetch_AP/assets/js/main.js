/* PROMISES */
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
    
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300)
                resolve(xhr.responseText);
            else
                reject(xhr.statusText);
        });
    });
};

document.addEventListener('click', event => {
    const element = event.target;
    const tag = element.tagName.toLowerCase();

    if(tag === 'a'){
        event.preventDefault();
        openPage(element);
    }
});

/* Usando Async */
async function openPage(el){
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if(response.status !== 200) throw new Error('ERRO 404!');

        const html = await response.text();
        openResult(html);
    } catch (error) {
        console.warn(error);
    }
}

function openResult(response){
    const result = document.querySelector('.paragrafo-result');
    result.innerHTML = response;
}

//Busca o endereço baseado no CPF informado
async function getCEP(cep){
    const request = await fetch('https://viacep.com.br/ws/'+ cep + '/json');
    const data = await request.json();
    console.log(data);
    console.log(data.cep);
}

/*
fetch('https://viacep.com.br/ws/35680440/json')
    .then(response => {
        if(response.status !== 200) throw new Error('Erro 404 MEU');
        return response.text();
    })
    .then(html => console.log(html))
    .catch(error => {
        console.log(error);
    });
*/
//getCEP(CEP);