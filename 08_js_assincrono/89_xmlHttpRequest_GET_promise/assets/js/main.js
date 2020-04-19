/* Método antigo via AJAX
const request = obj => {
    const xhr = new XMLHttpRequest();
    //xhr.open('GET', 'https://viacep.com.br/ws/35680440/json', true);
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300)
            obj.success(xhr.responseText);
        else
            obj.error(xhr.statusText);
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

function openPage(el){
    const href = el.getAttribute('href');
    const objConfig = {
        method: 'GET',
        url: href,
        success(response){
            openResult(response);
        },
        error(errorText){
            console.log(errorText);
        }
    };
    
    request(objConfig);
}

function openResult(response){
    const result = document.querySelector('.paragrafo-result');
    result.innerHTML = response;
}
*/

/* PROMISES */
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        //xhr.open('GET', 'https://viacep.com.br/ws/35680440/json', true);
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

/* Sem usar as palavras Async/Await */
/*function openPage(el){
    const href = el.getAttribute('href');
    const objConfig = {
        method: 'GET',
        url: href
    };
    
    request(objConfig)
        .then(response => {
            openResult(response);
        })
        .catch((error) => {
            console.log(error)
        });
}*/

/* Usando Async */
async function openPage(el){
    try {
        const href = el.getAttribute('href');
        const objConfig = {
            method: 'GET',
            url: href
        };
        
        const response = await request(objConfig);
        openResult(response);    
    } catch (error) {
        console.log(error);
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
const CEP = '35680440'
//getCEP(CEP);