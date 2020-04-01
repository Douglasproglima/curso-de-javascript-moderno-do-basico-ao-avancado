function contextMain(){
    const form = document.querySelector('#frm-person');
    const result = document.querySelector('.result');
    const peoples = [];

    function createNewPerson(name, user, email, password){
        return{
            name,
            user,
            email,
            password
        }
    }

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const name = form.querySelector('#name').value;
        const user = form.querySelector('#user').value;
        const email = form.querySelector('#email').value;
        const password = form.querySelector('#password').value;
        const person = createNewPerson(name, user, email, password);
        peoples.push(person);
        console.log(peoples);
        result.innerHTML += `<p><strong>Nome:</strong> ${name} | <strong>Usuário:</strong> ${user} | <strong>E-mail:</strong> ${email} | <strong>Senha:</strong> ${password}</p>`;
    });
}

contextMain();