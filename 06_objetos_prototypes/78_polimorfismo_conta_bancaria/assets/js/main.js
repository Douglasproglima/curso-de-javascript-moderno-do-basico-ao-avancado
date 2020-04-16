function Conta(agencia, numero, saldo){
    this.agencia = agencia;
    this.numero = numero; 
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo indísponivel.`);
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function(){
    console.log(`Agência/Conta: ${this.agencia}/${this.numero} | Saldo: ${this.saldo.toFixed(2)}`);
};

function CC(agencia, numero, saldo, limite){
    Conta.call(this, agencia, numero, saldo);
    
    this.limite = limite;
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;
CC.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo indísponivel: ${this.saldo}`);
        return;
    }
    
    this.saldo -= valor;
    this.verSaldo();
};

function CP(agencia, numero, saldo){
    Conta.call(this, agencia, numero, saldo);
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cc = new CC('01', '32413-8', 10, 20);
cc.verSaldo();
cc.depositar(150);
cc.sacar(150);
cc.sacar(1000);

const cp = new CC('01', '32413-8', 0);
cp.verSaldo();
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);

