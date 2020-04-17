class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.vol = 0;
    }

    //Método de Instância
    aumentarVol(){
        this.vol += 2;
    }
    diminuirVol(){
        this.vol -= 2;
    }

    //Método de instância - OBS> Métodos estáticos não tem acesso aos dados da instância
    static trocarPilha(){ 
        console.log('TROCAR PILHA'); 
        console.log('');
    }
}

const controleSamsung = new ControleRemoto('Smart TV LED 50" UHD 4K Samsung 50RU7100');

//Só consegue acessar métodos de instância
for(i = 0; i <= 4; i++)
    controleSamsung.aumentarVol();
controleSamsung.diminuirVol();
controleSamsung.diminuirVol();

//Métodos Estáticos(static) são acessados apenas pela Class
ControleRemoto.trocarPilha();

//O método radom() da class Math é static
Math.random();

console.log(controleSamsung);