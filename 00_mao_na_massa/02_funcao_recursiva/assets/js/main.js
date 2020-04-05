function contextMain(){
    
    console.log('-----------Função Normal-----------');
    /* A função abaixo é simples de ser entendida, mas é menos elegante, tem mais código e é verbosa demais */
    function power(base, exponent) {
        if (exponent == undefined) exponent = 2;
        
        var result = 1;
        for (var count = 0; count < exponent; count++) result *= base;
        
        return result;
    }
    console.log(power(2, 3));

    console.log('-----------Função Recursiva-----------');

    //Já a função abaixo tem pouco código mas possui uma complexidade maior: Função Recursiva
    function powerRecursiveSimple(base, exponent){
        return exponent  === 0 ? 1 : (base * powerRecursiveSimple(base, exponent - 1));
    }
    console.log(powerRecursiveSimple(2, 3));

    console.log('-----------Função Recursiva + ArrowFunction-----------');
    /* Já a função abaixo tem menos código do que anterior, mas possui uma complexidade bem maior:
    1 - Por ser uma função recursiva
    2 - Por ser uma ArrowFunction() 
    */
    const powerRecursive = (base, exponent) => exponent  === 0 ? 1 : (base * powerRecursive(base, exponent - 1));
    console.log(powerRecursive(2, 3));
}
contextMain();