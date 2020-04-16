
const _vel = Symbol('velocidade');
class Automovel{
    constructor(tipo, marca, modelo, anoFabricao){
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.anoFabricao = anoFabricao;
        this[_vel] = 0;
    }

    set velocidade(valor) {
        if(typeof valor !== 'undefined') return;
        if(valor >= 100 || valor <= 0) return;
        this[_vel] = valor;
    }

    get velocidade() {
            return this[_vel];
    }
    acelerar(){
        if(this[_vel] >= 100) return;
        this[_vel]++;
    }
    freiar(){
        if(this[_vel] <= 0) return;
        this[_vel]--;
    }
}

const fuscaMil = new Automovel('Carro', 'volkswagen', 'fusca', 1992);

for(let i =0; i <= 95; i++)
    fuscaMil.acelerar();

console.log(fuscaMil);