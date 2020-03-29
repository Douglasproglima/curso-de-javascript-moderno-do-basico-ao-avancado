function contextMain(){
    const form = document.querySelector('.form-imc');
    const result = form.querySelector('.result');

    function createParagrafo(){
        const p = document.createElement('p');
        return p;
    }

    function setResult(msg, isValid){
        const result = document.querySelector('.result');
        result.innerHTML = '';
        
        const p = createParagrafo();
        isValid ? p.classList.add('paragrafo-result') : 'paragrafo-result-error';
        
        p.innerHTML = msg;
        result.appendChild(p);
    }

    function getRangeIMC(imc){
        const range = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

        if(imc < 18.5) return range[0];
        if(imc >= 18.5 && imc <=24.9) return range[1];
        if(imc >= 25 && imc <= 29.9) return range[2];
        if(imc >= 30 && imc <= 34.9) return range[3];
        if(imc >= 35 && imc <= 39.9) return range[4];
        if(imc >= 40) return range[5];
    }

    function getIMC(weight, height){
        const result = weight / (height * height); 
        return result.toFixed(2);
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const weight = Number(event.target.querySelector('#weight').value);
        const height = Number(event.target.querySelector('#height').value);
        
        console.log(weight, height);
        if(!weight){
            setResult('Peso inválido', false);
            return;
        }
        if(!height){
            setResult('Altura inválida', false);
            return;
        }
        
        const imc = getIMC(weight, height);
        const rangeIMC = getRangeIMC(imc);
        //console.log(imc, rangeIMC);

        const msg = `Seu IMC é ${imc} - (${rangeIMC}).`;

        setResult(msg, true);
    });
}
contextMain();