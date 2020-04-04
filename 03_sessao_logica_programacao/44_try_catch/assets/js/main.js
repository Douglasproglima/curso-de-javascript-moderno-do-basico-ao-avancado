function contextMain(){
    let result = 'Externo';
    try{
        let result = 'Interno';
        let erro = '';
    
        const imc = (weight, height) => {
            if(typeof weight !== 'number' || typeof height !== 'number')
                throw('Informe apenas valores númericos.');

            /*
            if(typeof weight !== 'number' || typeof height !== 'number')
                throw Error('Informe apenas valores númericos.');

            if(typeof weight !== 'number' || typeof height !== 'number')
                throw new Error('Informe apenas valores númericos.');
            */

            result = weight / (height * height);
            return result;
        };

        const quadrado = (weight, height) => {
            result = weight * height;
            return result;
        }

        console.log(`RESULT: ${result}`);
        console.log(`IMC: ${Math.floor(imc('65', 1.75))}`);
        console.log(`Quadrado: ${Math.floor(quadrado(65, 1.75))}`);

    }catch(erro){
        console.log(erro);
    }
};
contextMain();