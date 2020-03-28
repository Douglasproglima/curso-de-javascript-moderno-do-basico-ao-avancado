function contextMain(){
    const form = document.querySelector('.form-imc');
    const result = form.querySelector('.result');

    function getEventForm(event){
        event.preventDefault();
        const weight = form.querySelector('#weight').value;
        const height = form.querySelector('#height').value;
        const calculator = weight / (height * height);

        console.log(calculator);
        result.innerHTML += `Seu indíce de massa corporal é: ${calculator.toFixed(2)}`;
    }
    form.addEventListener('submit', getEventForm);
}
contextMain();