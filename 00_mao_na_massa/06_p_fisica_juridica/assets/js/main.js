class ValidateForm{
    constructor() {
        this.form = document.querySelector('.register-form');
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handleSumit(e);
        });
    }

    handleSumit(e) {
        e.preventDefault();
        const validInputs = this.isValidInputs();
        const validPassword = this.isValidPasswords();
        if(validInputs && validPassword){
            alert('Formulário enviado com sucesso.');
            this.form.submit();
        }
    }

    typePeople(type) {
        if (type == 'F') {
            document.getElementById("fisica").style.display = "inline";
            document.getElementById("juridica").style.display = "none";
        } else if (type == "J") {
            document.getElementById("fisica").style.display = "none";
            document.getElementById("juridica").style.display = "inline";
        }
    }

    isValidInputs(){
        let valid = true;

        for(let error of this.form.querySelectorAll('.error'))
            error.remove();

        for(let field of this.form.querySelectorAll('.validate')){
            if(!field.value){
                this.showError(field, `O campo <strong>"${this.getLabel(field)}"</strong> pode estar em branco.`);    
                valid = false;
            }

            if(field.classList.contains('cpf')){
                if(!this.validateCPF(field)) valid = false;
            }
            
            if(field.classList.contains('userName')){
                if(!this.validateUser(field)) valid = false;
            }
        }

        return valid;
    }

    validateCPF(field){
        const cpf = new ValidateCPF(field.value);
        if(!cpf.validate())
            this.showError(field, `<strong>"${this.getLabel(field)}"</strong> inválido.`);
        return true;
    }

    validateUser(field){
        const userName = field.value;
        let valid = true;
        
        if(userName.length < 3 || userName.length > 12){
            this.showError(field, `O campo <strong>"${this.getLabel(field)}"</strong> precisa ter entre 3 e 12 caracteres.`);
            valid = false;
        }
        //Regex checa qualquer letra de a/A até z/Z e números de 1 a 9
        if(!userName.match(/^[a-zA-Z0-9]+$/g)){
            this.showError(field, `O campo <strong>"${this.getLabel(field)}"</strong> precisa conter apenas letras e/ou números.`);
            valid = false;
        }
        return valid;
    }

    isValidPasswords() {
        let valid = true;
        const password = this.form.querySelector('.pwd');
        const repeatPassword = this.form.querySelector('.repeat_pwd');

        if(password.value !== repeatPassword.value){
            valid = false;
            this.showError(password, `Os campos <strong>"${this.getLabel(password)}"</strong> e <strong>"${this.getLabel(repeatPassword)}"</strong> precisam ser iguais.`);
            this.showError(repeatPassword, `Os campos <strong>"${this.getLabel(password)}"</strong> e <strong>"${this.getLabel(repeatPassword)}"</strong> precisam ser iguais.`);
        }

        if(password.value.length < 6 || password.value.length > 12){
            valid = false;
            this.showError(password, `<strong>"${this.getLabel(password)}"</strong> precisa estar entre 6 a 12 caracteres.`);
        }

        return valid;
    }

    getLabel(field) {
        return field.previousElementSibling.innerText;
    }

    showError(field, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error');
        field.insertAdjacentElement('afterend', div);
    }
}

const valid = new ValidateForm();
valid.isValidInputs();