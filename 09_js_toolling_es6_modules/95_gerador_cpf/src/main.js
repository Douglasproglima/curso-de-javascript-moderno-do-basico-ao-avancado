import GeneratorCPF from './modules/GeneratorCPF';
import './assets/css/style.css';

//IEEF - Função auto executável
(function(){

    function getButton() {
        const btnNewCPF = document.querySelector('.btn-new-cpf');
        if(btnNewCPF){
            const cpf = new GeneratorCPF();
            const newCPF = document.querySelector('.cpf-gerado');
            newCPF.innerHTML = cpf.createNewCPF();
        }
    }
    getButton();
})();