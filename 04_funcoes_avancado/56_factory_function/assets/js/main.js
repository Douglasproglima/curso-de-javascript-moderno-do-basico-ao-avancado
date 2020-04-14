//FACTORY FUNCTIONS - Funções que retornam um Objeto

function setPessoas(name, lastName, old, birtday, w, h){
  return{
    name,
    lastName: lastName,
    old,
    birtday,
    weight: w,
    height: h,

    //Getter
    get allName() {
      return `${this.name} ${this.lastName}`;
    },

    //Setter
    set allName(param){
      param = param.split(' ');
      this.name = param.shift();
      this.lastName = param.join(' ');
    },

    imc: function(){
      const index = this.weight / (this.height * this.height);
      return index.toFixed(2);
    },

    apresentation: function(param = ''){
      return `Olá meu nome é ${this.allName}, tenho ${old} anos de idade e meu aniversário é em ${birtday}. 
      Meu peso atual é ${this.weight} kg e minha altura é ${this.height} meu IMC é ${this.imc()}
      ${param}`;
    }
  };
}

const p1 = setPessoas('Douglas', 'Lima', 32, '26/12/1987', 68, 1.78);
console.log(p1.apresentation('Thanks for you atention.'), p1.imc());

const p2 = setPessoas('Douglas', 'Lima', 32, '26/12/1987', 68, 1.78);
