/* CONSTRUCTOR FUNCTION */
function Calculator(){
  this.display = document.querySelector('.display');
  this.history = document.querySelector('.history');

  this.starter = () => {
    this.getClickButtons();
    this.pressEnter();
  };

  this.pressEnter = () => {
    this.display.addEventListener('keypress', e => {
      if(e.keyCode === 13) this.toCalculator();
    });
  }

  this.toCalculator = (el) => {
    try {
      let counter = eval(this.display.value);
      let historyAll = counter;
      if(!counter || counter === Infinity){
        this.display.value = 'Erro';
        return;
      }

      this.display.value = counter;
      el.classList.contains('btn-eq') 
        ? (this.history.value += ` = ${historyAll}`) 
        : (this.history.value += el.innerText);
    } catch (error) {
        this.display.value = 'Erro';
        this.clearAllDisplay();
        return;
    }
  };

  this.getClickButtons = () => {
    document.addEventListener('click', (e) => {
      const el = e.target;
      if(el.classList.contains('btn-num')) this.insertDisplay(el);
      if(el.classList.contains('btn-all-clear')) this.clearAllDisplay();
      if(el.classList.contains('btn-clear')) this.clearDisplay();
      if(el.classList.contains('btn-del')) this.delDisplay();
      if(el.classList.contains('btn-eq')) this.toCalculator(el);
    });
  };

  this.insertDisplay = el => {
    this.display.value += el.innerText;
    this.history.value += el.innerText;
    this.display.focus();
  };

  this.clearAllDisplay = () => {
    this.history.value = '';
    this.display.value = '';
  };

  this.clearDisplay = () => this.display.value = '';
  this.delDisplay = () => this.display.value = this.display.value.slice(0, -1); //Tamanho da string menos um (-1)
}

const calculator = new Calculator();
calculator.starter();