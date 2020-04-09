/* FACTORY FUNCTION */
function createCalculator(){
  return {
    //#region Atributos
    display: document.querySelector('.display'),
    history: document.querySelector('.history'),
    btnClearAll: document.querySelector('btn-all-clear'),
    btnClear: document.querySelector('btn-clear'),
    btnDel: document.querySelector('btn-del'),

    //#endregion

    starter(){
      this.clickButtons();
      this.pressEnter();
    },

    //#region Métodos/Funções
    clickButtons(){
      // this -> Nesse momento o this é const calculator
      //document.addEventListener('click', function(e){
      document.addEventListener('click', (e) => {  
        /*
        Nesse escopo tudo está apontando para o escopo document, porém é necessário alterar o 
        comportamento para acessar o this do const calculator.
        Para fazer isso na chave final do documento.addEventListener adicione o bind() apontando para o this.btn-clear
        documento.addEventListener('click', function(...){}.bind(this));

        OR

        ARROWFUNCTIONS
          Caso for uma ArronFunction o this sempre será this de quem criou o elemento 
        */
        const el = e.target;

        if(el.classList.contains('btn-num')){
          this.insertDisplay(el.innerText); 
        }

        if(el.classList.contains('btn-all-clear'))
          this.clearAllDisplay();

        if(el.classList.contains('btn-clear'))
          this.clearDisplay();

        if(el.classList.contains('btn-del'))
          this.delDisplay();

        if(el.classList.contains('btn-eq'))
          this.toCalculator();
      });
      //}.bind(this)); // Esse é usado somente se não for uma ArrowFunction para fazer o bind com o elemento que está chamando
    },

    insertDisplay(vlr){
      this.display.value += vlr;
      this.history.value += vlr;
    },

    clearAllDisplay(){
      this.history.value = '';
      this.display.value = '';
    },

    clearDisplay(){
      this.display.value = '';
    },

    delDisplay(){
      this.display.value = this.display.value.slice(0, -1); //Tamanho da string menos um (-1)
    },

    toCalculator(){
      let counter = this.display.value;
      let historyAll = this.history.value;
      
      try {
        counter = eval(counter);
        historyAll = counter;

        if(!counter || counter === Infinity){
          this.display.value = 'Erro';
          return;
        }

        this.display.value = counter;
        this.history.value += eval(historyAll);
      } catch (error) {
          this.display.value = 'Erro';
          return;
      }
    },

    pressEnter(){
      this.display.addEventListener('keyup', (e) => {
        if(e.keyCode === 13)
          this.toCalculator();
      });
    }
    //#endregion

  };
}

const calculator = createCalculator();
calculator.starter();